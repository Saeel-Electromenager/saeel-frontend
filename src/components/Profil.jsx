import React, { useEffect } from 'react';
import {
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  MenuItem,
  Select,
} from '@mui/material';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';

import Avatar from '../assets/zemoor.jpg';
import '../styles/Profil.css';
import Etat from './Etat';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosConfig = require('../configurations/axiosConfig');

export default function Profil() {
  const navigate = useNavigate();

  const [userInformations, setUserInformation] = React.useState('');
  const [dialog, setDialog] = React.useState({ open: false });
  const { idUser } = useParams();
  useEffect(() => {
    if (localStorage.hasOwnProperty('token'))
      axios(axiosConfig('PUT', `http://localhost:3000/api/user/${idUser}`))
        .then((res) => {
          setUserInformation(res.data);
          setDialog({
            open: false,
            day: new Date(res.data.birthdate).getDate(),
            month: new Date(res.data.birthdate).getMonth() + 1,
            year: new Date(res.data.birthdate).getFullYear(),
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            password: '',
          });
          localStorage.setItem('userInformations', JSON.stringify(res.data));
        })
        .catch((error) => console.log(error));
  }, [idUser]);

  function switchType() {
    switch (userInformations.type) {
      case 0:
        return 'Utilisateur';
      case 1:
        return 'Fournisseur';
      case 2:
        return 'Fournisseur';
      case 3:
        return 'Administrateur 😎';
      default:
        return 'Intrus';
    }
  }

  function handleClose() {
    setDialog({ ...dialog, open: false });
  }

  function handleOpen() {
    setDialog({ ...dialog, open: true });
  }

  const handleChangeDialog = (prop) => (event) => {
    setDialog({ ...dialog, [prop]: event.target.value });
  };

  function modifyProfil() {
    const month = dialog.month < 10 ? '0' + dialog.month : dialog.month;
    const day = dialog.day < 10 ? '0' + dialog.day : dialog.day;
    const birthdate = dialog.year + '-' + month + '-' + day;
    const axiosConfig = require('../configurations/axiosConfig');
    axios(
      axiosConfig('POST', 'http://localhost:3000/api/user/modify', {
        ...dialog,
        birthdate: birthdate,
      })
    )
      .then((res) => {
        setDialog({ ...dialog, open: false });
      })
      .catch((error) => console.log(error.response.data.error));
  }

  function Adresses() {
    if (userInformations.Adresses)
      return userInformations.Adresses.map((adress) => {
        return (
          <Grid
            key={adress.idAdress}
            item
            md={4}
            xs={8}
            sm={6}
            lg={3}
            textAlign="left"
            p={3}
          >
            <Card sx={{ minWidth: 215 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }}>{adress.wilaya}</Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography>{adress.daira}</Typography>
                <Typography>{adress.commune}</Typography>
                <Typography>{adress.phone}</Typography>
                <Typography style={{ marginLeft: '60%' }}>
                  <Button onClick={() => console.log(adress.idAdress)}>
                    modifier
                  </Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      });
    return null;
  }

  function Commandes() {
    return (
      <Grid item md={4} xs={8} sm={6} lg={3} textAlign="left">
        <Card sx={{ minWidth: 215 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }}>Montre connecté</Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography>Béjaia</Typography>
            <Typography>Montant : 130000.00 DA</Typography>
            <Typography>Délai de laivrison : 5 jours</Typography>
            <Typography variant="subtitle1">
              Etat : En attente de ccdcdzzdzdz
            </Typography>
            <CardActions>
              <Button sx={{ marginLeft: 'auto' }}>Voir les détails</Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Container>
      <Header />
      <Grid container>
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
            <img src={userInformations.image} alt="Avatar" />
          </Grid>
          <Grid item md={9} lg={10} sm={8} xs={7}>
            <Grid container style={{ justifyContent: 'space-between' }}>
              <h2>
                {`${userInformations.firstname} ${userInformations.lastname}`}
              </h2>
              <Etat />
            </Grid>

            <Grid container style={{ justifyContent: 'space-between' }}>
              <p style={{ color: 'rgb(0,0,0,0.5)' }}>{switchType()}</p>
              <Button onClick={handleOpen} variant="contained">
                Modifier profil
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          ml={4}
          p={2}
          style={{
            backgroundColor: 'white',
            borderRadius: '18px',
            width: '94.5%',
          }}
        >
          <h2>A propos</h2>
          <p>{`@${userInformations.username}`}</p>
          <Grid>
            <p> date de naissance : {userInformations.birthdate}</p>
          </Grid>
          <p>date d'inscription : {userInformations.createdAt}</p>
        </Grid>

        <Grid
          item
          container
          textAlign="center"
          m={4}
          p={2}
          style={{ backgroundColor: 'white', borderRadius: '18px' }}
        >
          <Grid item xs={12} pl={1} textAlign="left">
            <h2>mes adresse</h2>
          </Grid>
          <Adresses />
          <Grid item md={4} xs={8} sm={6} lg={3} m="auto" p={3}>
            <Card sx={{ minWidth: 215 }}>
              <Button>ajouter une adresse </Button>
            </Card>
          </Grid>
        </Grid>

        <Grid
          item
          container
          textAlign="center"
          m={4}
          p={2}
          style={{ backgroundColor: 'white', borderRadius: '18px' }}
        >
          <Grid item xs={12} pl={1} textAlign="left">
            <h2>mes commande</h2>
          </Grid>
          <Commandes />
          <Grid item md={4} xs={8} sm={6} lg={3} m="auto" p={3}>
            <Card sx={{ minWidth: 215 }}>
              <Button>Ajouter une commande</Button>
            </Card>
          </Grid>
        </Grid>
      </Grid>

      <Dialog component="form" open={dialog.open}>
        <DialogTitle>Modifier vos information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Nom"
            type="text"
            fullWidth
            variant="outlined"
            value={dialog.lastname}
            onChange={handleChangeDialog('lastname')}
          />
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="Prénom"
            type="text"
            fullWidth
            variant="outlined"
            value={dialog.firstname}
            onChange={handleChangeDialog('firstname')}
          />
          <Grid container pt={4}>
            <Grid paddingRight={1} item xs={3}>
              <TextField
                fullWidth
                InputProps={{ inputProps: { min: 0, max: 31 } }}
                id="day"
                label="jour"
                type="number"
                value={dialog.day}
                onChange={handleChangeDialog('day')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid paddingRight={1} item xs={5}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                fullWidth
                value={dialog.month}
                label="Mois"
                onChange={handleChangeDialog('month')}
              >
                <MenuItem value={1}>Janvier</MenuItem>
                <MenuItem value={2}>Février</MenuItem>
                <MenuItem value={3}>Mars</MenuItem>
                <MenuItem value={4}>Avril </MenuItem>
                <MenuItem value={5}>Mai</MenuItem>
                <MenuItem value={6}>Juin</MenuItem>
                <MenuItem value={7}>Juillet</MenuItem>
                <MenuItem value={8}>Aout</MenuItem>
                <MenuItem value={9}>Septembre</MenuItem>
                <MenuItem value={10}>Octobre</MenuItem>
                <MenuItem value={11}>Novembre</MenuItem>
                <MenuItem value={12}>Décembre</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <TextField
                InputProps={{
                  inputProps: { min: 1940, max: new Date().getFullYear() - 13 },
                }}
                id="year"
                label="Année"
                type="number"
                fullWidth
                value={dialog.year}
                onChange={handleChangeDialog('year')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>

          <TextField
            autoFocus
            sx={{ mt: 3 }}
            id="password"
            label="Mot de passe"
            type="password"
            fullWidth
            variant="outlined"
            value={dialog.password}
            onChange={handleChangeDialog('password')}
          />
          <Typography marginRight={'10%'} variant="subtitle1">
            Vous devais saisir votre mot de passe avant de valider
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button disabled={!dialog.password} onClick={modifyProfil}>
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </Container>
  );
}
