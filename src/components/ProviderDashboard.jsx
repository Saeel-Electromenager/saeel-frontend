import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ListProdit from './ListProdit';
export default function ProviderDashboard() {
  return (
    <Grid textAlign={'center'}>
      <Link to="/dashboard/addproduct">
        <Button variant="contained">Ajouter un produit</Button>
      </Link>
      <Grid>
        <ListProdit />
      </Grid>
    </Grid>
  );
}
