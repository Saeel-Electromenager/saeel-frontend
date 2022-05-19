import * as React from 'react';
import HomeSearch from './HomeSearch';
import SwiperHome from '../components/SwiperHome';
import ArgumentHome from '../components/ArgumentHome';
import TopSaeelHome from '../components/TopSaeelHome';
import TopSaeelBody from './TopSaeelBody.jsx';
import NewProductHome from '../components/NewProductHome';
import CategoriesHome from '../components/CategoriesHome';
import CategorieInMenu from './CategorieInMenu.jsx';
import { Grid } from '@mui/material';

export default function Body({ activeClasse }) {
  function GetBody() {
    switch (activeClasse) {
      case 'Home':
        return (
          <Grid
            sx={{
              gap: '60px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <HomeSearch />
            <SwiperHome />
            <ArgumentHome />
            <TopSaeelHome />
            <NewProductHome />
            <CategoriesHome />
          </Grid>
        );
      case 'Categories':
        return (
          <Grid>
            <CategorieInMenu />
          </Grid>
        );
      case 'TopSaeel':
        return (
          <Grid>
            <TopSaeelBody />
          </Grid>
        );

      default:
        return <div>404</div>;
    }
  }
  return <GetBody />;
}
