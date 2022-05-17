import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import TableDashboard from './TableDashboard';
import Categorie from './Categorie';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

export default function AdminDashboard({ admin }) {
  const [providers, setProviders] = React.useState('');
  const [moderators, setModerators] = React.useState('');
  const headers = ["Nom d'utilisateur", 'Nom', 'Prénom', 'Option'];

  useEffect(() => {
    axios(axiosConfig('GET', '/api/user/providers/'))
      .then((res) => {
        setProviders(res.data);
      })
      .catch((error) => console.log(error));
    axios(axiosConfig('GET', '/api/user/moderators/'))
      .then((res) => {
        setModerators(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function Table(props) {
    if (!props.content) return null;
    return <TableDashboard headers={headers} data={props.content} />;
  }

  return (
    <Grid container m="auto" justifyContent="center" gap={3}>
      <Grid textAlign="center">
        <h2>Liste des fournisseurs</h2>
        <Table content={providers} />
      </Grid>
      {admin ? (
        <Grid textAlign="center">
          <h2>Liste des moderateurs</h2>
          <Table content={moderators} />
        </Grid>
      ) : (
        ''
      )}
      <Grid item xs={12} textAlign="center">
        <h2>Catégories</h2>
        <Categorie />
      </Grid>
    </Grid>
  );
}
