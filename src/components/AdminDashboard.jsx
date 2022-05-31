import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  CardMedia,
  Stack,
} from '@mui/material';
import React, { useEffect } from 'react';
import TableDashboard from './TableDashboard';
import Categorie from './Categorie';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function AdminDashboard({ admin }) {
  
  const [providers, setProviders] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  const [moderators, setModerators] = React.useState('');
  const headers = ["Nom d'utilisateur", 'Nom', 'Prénom', 'Option'];

  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/category')).then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    axios(axiosConfig('GET', '/api/user/providers/'))
      .then((res) => {
        setProviders(res.data);
      })
      .catch((error) => console.log(error));
    axios(axiosConfig('GET', '/api/user/moderators/'))
      .then((res) => {
        setModerators(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function Table(props) {
    if (!props.content) return null;
    return <TableDashboard headers={headers} data={props.content} />;
  }

  return (
    <Grid container m="auto" justifyContent="space-between">
      <Grid item lg={5.7} xs={12} textAlign="left">
        <h2>Liste des fournisseurs</h2>
        <Table content={providers} />
      </Grid>
      {admin ? (
        <Grid item lg={5.7} xs={12} textAlign="left">
          <h2>Liste des moderateurs</h2>
          <Table content={moderators} />
        </Grid>
      ) : (
        ''
      )}
      <Grid marginTop="60px" item xs={12} textAlign="center">
        <h2>Catégories</h2>
        <Stack flexWrap="wrap" direction="row" gap="30px">
          {categories.map((category, index) => {
            return (
              <Card
                key={`${category.idCategory}-${index}`}
                sx={{
                  width: '300px',
                  display: 'flex',
                  justifyContent: 'left',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={category.image}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {category.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {category.createdAt
                        ? category.createdAt.split('T')[0]
                        : ''}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {category.n_product + ' Produits'}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            );
          })}
        </Stack>
        <Categorie />
      </Grid>
    </Grid>
  );
}
