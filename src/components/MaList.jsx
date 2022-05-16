import { Grid } from '@mui/material';
import React from 'react';
import TableFourni from './TableFourni';
import Categorie from './Categorie'

export default function MaList() {
  return (
    <Grid container m="auto" md={10} justifyContent="space-around">
      <Grid md={5} textAlign="center">
        {' '}
        <h2>list fournisseur</h2>
        <TableFourni></TableFourni>
      </Grid>
      <Grid md={5} textAlign="center">
        {' '}
        <h2> list moderateur</h2>
        <TableFourni></TableFourni>
      </Grid>
      <Grid md={5} textAlign="center">
        {' '}
        <h2> categorie</h2>
  <Categorie />
      </Grid>
    </Grid>
  );
}
