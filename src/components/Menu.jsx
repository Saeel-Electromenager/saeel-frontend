import * as React from 'react';
import '../styles/Menu.css';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FaqIcon from '@mui/icons-material/Quiz';
import Stack from '@mui/material/Stack';
import { useMediaQuery, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Menu({ activeClasse, setActiveClasse }) {
  return (
    <Stack className="container" direction="column" spacing={3}>
      <Button
        onClick={() => setActiveClasse('Home')}
        className={activeClasse === 'Home' ? 'active' : ''}
        startIcon={<HomeIcon className="svg_icons" />}
      >
        {useMediaQuery('(min-width:1150px)') ? 'Home' : ''}
      </Button>
      <Button
        onClick={() => setActiveClasse('Categories')}
        className={activeClasse === 'Categories' ? 'active' : ''}
        startIcon={<MenuIcon className="svg_icons" />}
      >
        {useMediaQuery('(min-width:1150px)') ? 'Catalogue' : ''}
      </Button>
      <Button
        onClick={() => setActiveClasse('TopSaeel')}
        className={activeClasse === 'TopSaeel' ? 'active' : ''}
        startIcon={<StarOutlineOutlinedIcon className="svg_icons" />}
      >
        {useMediaQuery('(min-width:1150px)') ? 'TOP Saeel' : ''}
      </Button>
      <Button
        onClick={() => setActiveClasse('About')}
        className={activeClasse === 'About' ? 'active' : ''}
        startIcon={<InfoOutlinedIcon className="svg_icons" />}
      >
        {useMediaQuery('(min-width:1150px)') ? 'À Propos' : ''}
      </Button>
      <Button
        onClick={() => setActiveClasse('FAQ')}
        className={activeClasse === 'FAQ' ? 'active' : ''}
        startIcon={<FaqIcon className="svg_icons" />}
      >
        {useMediaQuery('(min-width:1150px)') ? 'FAQ' : ''}
      </Button>

      <Box className="button-connection-home">
        <Link to="/login">
          {useMediaQuery('(min-width:1150px)') ? (
            <Button
              className="button-connection"
              endIcon={<LoginIcon className="svg_icons_connection" />}
            >
              Connexion
            </Button>
          ) : (
            <IconButton className="account-mobile" aria-label="delete">
              <AccountCircleIcon
                sx={{ fontSize: '30px' }}
                color="#5C4EBD"
                className="account-mobile circle-account"
              />
            </IconButton>
          )}
        </Link>
      </Box>
    </Stack>
  );
}
