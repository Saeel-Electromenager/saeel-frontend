import React from 'react';
import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Avatar from '../assets/zemoor.jpg';
import '../styles/Profil.css';

export default function Aboutme() {
  const info = {
    nom: 'sidali',
    prenom: 'mouhous',
    naissance: '25/10/2000',
    pseudo: 'sidou06',
    poste: 6000,
    email: 'sidallimouhous9@gmail.com',
    wilaya: 'bejaia',
    commune: 'ouedghir',
    village: 'Mellala',
    rue: 'pour bien precicer lendroit ',
  };
  return (
    <Container>
      <Grid container="lg">
        <Grid
          item
          md={12}
          container
          m={4}
          p={2}
          style={{ backgroundColor: 'white', borderRadius: '18px' }}
        >
          <Grid
            item
            className="avatar"
            textAlign="left"
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src={Avatar} alt="Avatar" />{' '}
          </Grid>
          <Grid item md={9} lg={10} sm={8} xs={7}>
            <Grid container style={{ justifyContent: 'space-between' }}>
              {' '}
              <h2> Eric zemmor </h2>{' '}
              <IconButton aria-label="more">
                <MoreVertIcon />
              </IconButton>
            </Grid>
            <Grid container style={{ justifyContent: 'space-between' }}>
              {' '}
            
              <p style={{ color: 'rgb(0,0,0,0.5)' }}>utilisateur</p>
              <Button  variant="contained"> modifier profil</Button>
            </Grid>

          </Grid>
        </Grid>

        <Grid
          item
          
          ml={4}
          p={2}
          style={{ backgroundColor: 'white', borderRadius: '18px',width:'94.5%'}}
        >
          <h2>A propos</h2>
          <p> @Zemour_06</p>
          <Grid>
            {' '}
            <p> date de naissance : {info.naissance}</p>
          </Grid>
          <p> date d'inscription : 25/10/2021</p>
        </Grid>

        <Grid
          item
          container
          textAlign="center"
          m={4}
          p={2}
          style={{ backgroundColor: 'white', borderRadius: '18px' }}
        >
          <Grid xs={12} pl={1} textAlign="left">
            {' '}
            <h2>mes adresse</h2>
          </Grid>
          <Grid md={4} xs={8} sm={6} lg={3} textAlign="left" p={3}>
            <Card sx={{ minWidth: 215 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }}>{info.wilaya}</Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography>{info.commune}</Typography>
                <Typography>{info.village}</Typography>
                <Typography>{info.rue}</Typography>
                <Typography style={{ marginLeft: '60%' }}>
                  {' '}
                  <Button>modifier</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid md={4} xs={8} sm={6} lg={3} textAlign="left" p={3}>
            <Card sx={{ minWidth: 215 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }}>{info.wilaya}</Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography>{info.commune}</Typography>
                <Typography>{info.village}</Typography>
                <Typography>{info.rue}</Typography>
                <Typography style={{ marginLeft: '60%' }}>
                  {' '}
                  <Button>modifier</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4} xs={8} sm={6} lg={3} textAlign="left" p={3}>
            <Card sx={{ minWidth: 215 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }}>{info.wilaya}</Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography>{info.commune}</Typography>
                <Typography>{info.village}</Typography>
                <Typography>{info.rue}</Typography>
                <Typography style={{ marginLeft: '60%' }}>
                  {' '}
                  <Button>modifier</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4} xs={8} sm={6} lg={3} m="auto" p={3}>
            <Card sx={{ minWidth: 215 }}>
              <Button>ajouter une adresse </Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
