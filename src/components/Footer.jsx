import { Grid } from '@mui/material';
import * as React from 'react';
import logosaeel from '../assets/Logosaeel.png';
import '../styles/footer.css';

export default function F() {
  return (
    <Grid style={{ marginTop: '50px' }}>
      <Grid
        container
        style={{
          backgroundColor: '#1C1C1C',
          borderRadius: '10px 10px 0px 0px',
        }}
      >
        <Grid item md={3} p={2}>
          <h3 className="footer-title">Besoin d'aide ?</h3>
          <Grid pl={5} pt={2}>
            <ul>
              <li>Contactez-nous</li>
              <li>Questions frequantes</li>
              <li>Nos conditions de livraison</li>
            </ul>
          </Grid>
          <Grid className="footer-number-white" pt={2}>
            Contactez le{' '}
            <span className="footer-number-red"> 0541 49 43 61</span> ou le
            <span className="footer-number-red">
              {' '}
              00 213 541 49 43 61 depuis n’importe où
            </span>
          </Grid>
        </Grid>
        <Grid item md={3} p={2}>
          <h3 className="footer-title">Informations sur saeel</h3>
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
        <Grid item md={3} p={2}>
          <h3 className="footer-title">Parcourir les categories</h3>
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
        <Grid item md={3} sm={6} p={2}>
          <h3 className="footer-title">Rejoignez nous</h3>
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
        <h4 className="footer-copyright">
          Copyright © 2022,<strong> Saeel.</strong> All Rights Reserved
        </h4>
      </Grid>
    </Grid>
  );
}
