import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Menu from '../components/Menu';
import '../styles/Home.css';
import Search from '../components/Search';
import SwiperHome from '../components/SwiperHome';
import ArgumentHome from '../components/ArgumentHome';
import TopRatedHome from '../components/TopRatedHome';
import NewProductHome from '../components/NewProductHome';
import CategoriesHome from '../components/CategoriesHome';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <div style={{ padding: 50 }} className="test"></div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {/* Menu */}
        <Grid item xs={2}>
          <Grid style={{ height: '100%', marginTop: 30 }}>
            <Menu />
          </Grid>
        </Grid>

        <Grid
          item
          xs={10}
          style={{
            borderRadius: '13px',
            backgroundColor: '#fcfcfc',
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{ padding: '20px 50px 100px 50px', rowGap: '50px' }}
          >
            <Search />
            <SwiperHome />
            <ArgumentHome />
            <TopRatedHome />
            <NewProductHome />
            <CategoriesHome />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
