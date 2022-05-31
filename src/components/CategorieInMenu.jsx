import * as React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Stack,
  CardContent,
  Typography,
  CardMedia,
  Card,
} from '@mui/material';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';
import HomeSearch from '../components/HomeSearch';
import { useMediaQuery } from '@mui/material';

export default function CategorieInMenu() {
  const { searchCategory, searchKey } = useParams();
  const [categories, setCategory] = React.useState([]);

  React.useEffect(() => {
    axios(axiosConfig('GET', '/api/category'))
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => console.log(error));
  }, [searchCategory, searchKey]);

  return (
    <Grid>
      <HomeSearch />
      <Stack
        flexWrap="wrap"
        sx={{ marginTop: '60px' }}
        direction={useMediaQuery('(min-width:700px)') ? 'row' : 'column'}
        gap="20px"
      >
        {categories.map((category, index) => {
          return (
            <Link
              key={`${category.idCategory}-${index}`}
              to={`/search/${category.idCategory}/allOfSaeel`}
            >
              <Card
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
            </Link>
          );
        })}
      </Stack>
    </Grid>
  );
}
