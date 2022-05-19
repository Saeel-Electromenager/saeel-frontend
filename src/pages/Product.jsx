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
import DialogOrder from '../components/DialogOrder';
import '../styles/Product.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const axiosConfig = require('../configurations/axiosConfig');

export default function Product() {
  const [productInformations, setProductInformations] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const { idProduct } = useParams();
  useEffect(() => {
    axios(axiosConfig('PUT', `/api/product/${idProduct}`))
      .then((res) => {
        console.log(res.data);
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

  function getImage() {
    if (!!productInformations)
      if (productInformations.Images.length > 0)
        return productInformations.Images[0].url;
    return 'https://mui.com/static/images/cards/live-from-space.jpg';
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
                  image={getImage()}
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
                  <Typography variant="body2">
                    Disponible : {productInformations.quantity} en stock.
                  </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto', marginLeft: 'auto' }}>
                  <Button onClick={() => setOpen(true)} size="small">
                    Acheter
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
          </Card>

          <Card>TODO : carossel image</Card>

          <Card sx={{ p: 2 }}>
            <Typography variant="h4" component="h2">
              Description
            </Typography>
            <Typography variant="body2" width="100%">
              {productInformations.description}
            </Typography>
          </Card>
        </Grid>
        <Footer />
      </Container>

      <DialogOrder
        product={productInformations}
        open={open}
        setOpen={setOpen}
      />
    </Box>
  );
}
