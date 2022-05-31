import * as React from 'react';
import { Divider, Grid, Typography } from '@mui/material';

export default function ArgumentHome() {
  return (
    <Grid direction="row" container>
      <Grid item px={2} xs={3}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '30px',
            letterSpacing: '0em',
            textAlign: 'center',
          }}
        >
          Articles petits prix
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '22px',
            textAlign: 'center',
          }}
        >
          Il y a toujours un article en promo !
        </Typography>
      </Grid>

      <Divider
        sx={{ alignSelf: 'center', height: 40, mx: -0.2 }}
        orientation="vertical"
      />

      <Grid item px={2} xs={3}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '30px',
            letterSpacing: '0em',
            textAlign: 'center',
          }}
        >
          Achats sans soucis
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '22px',
            textAlign: 'center',
          }}
        >
          Chaque commande à une Protection de l'acheteur
        </Typography>
      </Grid>

      <Divider
        sx={{ alignSelf: 'center', height: 40, mx: -0.2 }}
        orientation="vertical"
      />

      <Grid item px={2} xs={3}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '30px',
            letterSpacing: '0em',
            textAlign: 'center',
          }}
        >
          Livraison express
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '22px',
            textAlign: 'center',
          }}
        >
          Ce que vous voulez, livré où vous voulez
        </Typography>
      </Grid>

      <Divider
        sx={{ alignSelf: 'center', height: 40, mx: -0.2 }}
        orientation="vertical"
      />

      <Grid item px={2} xs={3}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '30px',
            letterSpacing: '0em',
            textAlign: 'center',
          }}
        >
          Paiement sécurisé
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '22px',
            textAlign: 'center',
          }}
        >
          Payez avec les meilleures méthodes de paiement
        </Typography>
      </Grid>
    </Grid>
  );
}
