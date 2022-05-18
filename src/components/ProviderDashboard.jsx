import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProviderDashboard() {
  return (
    <Box>
      <Link to="/dashboard/addproduct">
        <Button>Ajouter un produit</Button>
      </Link>
    </Box>
  );
}
