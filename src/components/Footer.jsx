import { Grid, Typography, Divider } from '@mui/material';
import { width } from '@mui/system';
import * as React from 'react';
import logosaeel from '../assets/Logosaeel.png';

export default function F() {
  return (
    <Grid style={{ marginLeft: '-24px', marginTop: '50px' }}>
      <Grid
        container
        style={{ background: 'black', borderRadius: '10px 10px 0px 0px' }}
      >
        <Grid item md={3} p={2} style={{ color: 'white' }}>
          <h3 style={{ color: 'white' }}>Besoin d'aide ?</h3>
          <Grid pl={5} pt={2}>
            <ul>
              <li>Contactez-nous</li>
              <li>Questions frequantes</li>
              <li>Nos conditions de livraison</li>
            </ul>
          </Grid>
          <Grid pt={2}>
            Contactez le <span style={{ color: 'red' }}> 0541 49 43 61</span> ou
            le
            <span style={{ color: 'red' }}>
              {' '}
              00 213 541 49 43 61 depuis n’importe où
            </span>
          </Grid>
        </Grid>
        <Grid item md={3} p={2} style={{ color: 'white' }}>
          <h3 style={{ color: 'white' }}>Informations sur saeel</h3>
          <Grid pl={5} pt={2}>
            <ul>
              <li>Qui sommes nous</li>
              <li>Protection de l’acheteur</li>
              <li>Signaler une infraction</li>
              <li>Rappel de produit</li>
              <li> Données personnelles</li>
              <li>Utilisation des Cookies</li>
              <li>Les garanties</li>
            </ul>
          </Grid>
        </Grid>
        <Grid item md={3} p={2} style={{ color: 'white' }}>
          <h3 style={{ color: 'white' }}>Parcourir les categories</h3>
          <Grid pl={5} pt={2}>
            <ul>
              <li>Cuisinière à gaz</li>
              <li>Four Micro-Ondes</li>
              <li>Mini Four</li>
              <li>Plaque de cuisson</li>
              <li>Hotte Aspirante</li>
              <li>Lave Linge</li>
              <li>Climatiseur</li>
              <li>Lave Vaisselle</li>
              <li>Congélateur & Réfrigérateur</li>
            </ul>
          </Grid>
        </Grid>
        <Grid item md={3} sm={6} p={2} style={{ color: 'white' }}>
          <h3 style={{ color: 'white' }}>Rejoignez nous</h3>
          <Grid pl={5} pt={2}>
            <ul>
              <li>Nos offres d'emploi </li>
              <li>Devenir fournisseur Saeel</li>
              <li>Devenir sponsor Saeel</li>
            </ul>
          </Grid>
          <Grid pt={6}>
            <img src={logosaeel} alt="logo saeel" height={30} width={170} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        p={2}
        textAlign="center"
        style={{ background: '#3F3F3F' }}
      >
        <h4 style={{ color: 'gray', margin: 'auto', opacity: '1' }}>
          Copyright © 2022,<span style={{ color: 'white' }}> Saeel.</span> All
          Rights Reserved
        </h4>
      </Grid>
    </Grid>
  );
}
