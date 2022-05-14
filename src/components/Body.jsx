import * as React from 'react';
import Search from '../components/Search';
import SwiperHome from '../components/SwiperHome';
import ArgumentHome from '../components/ArgumentHome';
import TopRatedHome from '../components/TopRatedHome';
import NewProductHome from '../components/NewProductHome';
import CategoriesHome from '../components/CategoriesHome';
import { Grid } from '@mui/material';

export default function Body({ activeClasse }) {
  function GetBody() {
    switch (activeClasse) {
      case 'Home':
        return (
          <Grid
            sx={{
              padding:
                window.innerWidth < 500
                  ? '20px 10px 50px 10px'
                  : '20px 50px 50px 50px',
              gap: '60px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Search />
            <SwiperHome />
            <ArgumentHome />
            <TopRatedHome />
            <NewProductHome />
            <CategoriesHome />
          </Grid>
        );
      case 'Categories':
        return (
          <Grid
            container
            spacing={3}
            sx={{ padding: '20px 50px 100px 50px', rowGap: '50px' }}
          ></Grid>
        );

      default:
        return <div>404</div>;
    }
  }
  return <GetBody />;
}
