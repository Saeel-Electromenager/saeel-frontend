import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosConfig from '../configurations/axiosConfig';
import AdminDashboard from '../components/AdminDashboard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userInformations, setUserInformations] = React.useState('');

  useEffect(() => {
    const isLogged = localStorage.hasOwnProperty('token');
    if (localStorage.hasOwnProperty('userInformations')) {
      setUserInformations(JSON.parse(localStorage.getItem('userInformations')));
    } else if (isLogged) {
      axios(axiosConfig('PUT', `/api/user/${localStorage.getItem('token')}`))
        .then((res) => setUserInformations(res.data))
        .catch(() => alert('Erreur inattendu'));
    } else navigate('/login');
  }, [navigate]);

  function GetDashboard() {
    switch (userInformations.type) {
      case 1:
        return <div>fournisseur</div>;
      case 2:
        return <AdminDashboard />;
      case 3:
        return <AdminDashboard admin />;
      default:
        return <div>404</div>;
    }
  }
  return (
    <Box>
      <Header />
      <GetDashboard />
      <Footer />
    </Box>
  );
}
