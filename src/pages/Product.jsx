import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const axiosConfig = require('../configurations/axiosConfig');

export default function Product() {
  const [productInformations, setProductInformations] = React.useState('');

  const { idProduct } = useParams();
  useEffect(() => {
    if (localStorage.hasOwnProperty('token'))
      axios(axiosConfig('PUT', `/api/product/${idProduct}`))
        .then((res) => {
          setProductInformations(res.data);
        })
        .catch((error) => console.log(error));
  }, [idProduct]);

  function getUsername() {
    if (!productInformations.User) return '@user';
    return '@' + productInformations.User.username;
  }

  function getDescription() {
    if (!productInformations) return '-';
    return productInformations.description.substring(0, 130);
  }
  return (
    <Box>
      <Container>
        <Header />
        <Grid
          className="container-product"
          sx={{
            gap: '60px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Card>
            <Grid container rowGap={3} columnGap={3}>
              <Grid item xs={3}>
                <CardMedia
                  component="img"
                  height={'100%'}
                  width="100%"
                  image="https://mui.com/static/images/cards/live-from-space.jpg"
                  alt="green iguana"
                />
              </Grid>
              <Grid
                item
                xs={8}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {new Date(productInformations.createdAt).toDateString()}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {productInformations.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {getUsername()}
                  </Typography>
                  <Typography variant="body2">{getDescription()}</Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto', marginLeft: 'auto' }}>
                  <Button size="small">Acheter</Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>

          <Card>carossel image</Card>

          <Card>
            <Typography variant="h5" component="div">
              Description
            </Typography>
            <Typography variant="body2" width="100%">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              sapiente, nulla earum distinctio officiis id? Et provident
              animi... Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Placeat repellat porro error ipsum laboriosam quia deserunt ad
              similique nemo consequuntur. Repellendus recusandae eum blanditiis
              et, totam velit earum ducimus nihil? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deleniti harum doloribus placeat,
              molestias repellat adipisci assumenda praesentium exercitationem
              consequuntur fugit saepe nihil pariatur, voluptas dolores
              doloremque! Iure nihil dolorem impedit!
            </Typography>
          </Card>
        </Grid>
        <Footer />
      </Container>
    </Box>
  );
}
