import { Box, Button ,Grid} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ListProdit from './ListProdit';
export default function ProviderDashboard() {
  return (

    <Grid container justifyContent="space-around" >
      <Grid style={{background:"green"}}>
    <Box>
      <Link to="/dashboard/addproduct">
        <Button variant="contained">Ajouter un produit</Button>

      </Link>
 
  
    </Box> 
    </Grid > 
      <Grid md={8}> <ListProdit /> </Grid>
    </Grid>
  );
}
