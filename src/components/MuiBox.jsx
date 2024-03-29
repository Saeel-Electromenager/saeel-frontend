import { Divider, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import FaqIcon from '@mui/icons-material/Quiz';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function MuiBox({ setActiveClasse }) {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [IsDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [atHome, setAtHome] = React.useState(true);

  React.useEffect(() => {
    setAtHome(pathname === '/');
  }, [pathname]);

  const handleClick = () => {
    setOpen(!open);
  };

  function LinkToProfile() {
    const isLogged = localStorage.hasOwnProperty('token');
    if (isLogged) {
      const idUser = localStorage.getItem('token').split(' ')[0];
      return (
        <Link to={`/user/${idUser}`}>
          <ListItemButton
            sx={[
              {
                '&:hover': {
                  backgroundColor: '#382a93',
                },
              },
              {
                color: 'white',
                backgroundColor: '#5C4EBD',
                borderRadius: '10px',
                my: 1,
              },
            ]}
          >
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </Link>
      );
    }
    return null;
  }

  function AuthButton() {
    const isLogged = localStorage.hasOwnProperty('token');
    if (!isLogged) {
      return (
        <Box>
          <Link to="/login">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText primary="Se connecter" />
            </ListItemButton>
          </Link>

          <Link to="/register">
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="S'inscrire" />
            </ListItemButton>
          </Link>
        </Box>
      );
    } else
      return (
        <ListItemButton onClick={logout} sx={{ pl: 4 }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Se déconnecter" />
        </ListItemButton>
      );
  }
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <DehazeIcon style={{ color: '#CACCD9' }} fontSize="inherit" />
      </IconButton>
      <Drawer
        anchor="right"
        open={IsDrawerOpen}
        onClick={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <Link sx={{ color: 'red' }} to="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: 'black' }} primary="Accueil" />
              </ListItemButton>
            </Link>

            {LinkToProfile()}

            <ListItemButton
              onClick={() => {
                return !atHome ? navigate('/') : setActiveClasse('Categories');
              }}
            >
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
              <ListItemText primary="Catalogue" />
            </ListItemButton>

            <Link to="/top-saeel">
              <ListItemButton>
                <ListItemIcon>
                  <StarOutlineOutlinedIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: 'black' }} primary="Top Saeel" />
              </ListItemButton>
            </Link>

            <ListItemButton
              onClick={() => {
                return !atHome ? navigate('/') : setActiveClasse('About');
              }}
            >
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="A propos" />
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                return !atHome ? navigate('/') : setActiveClasse('FAQ');
              }}
            >
              <ListItemIcon>
                <FaqIcon />
              </ListItemIcon>
              <ListItemText primary="FAQ" />
            </ListItemButton>

            <Divider />

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Authentification" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <AuthButton />
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
