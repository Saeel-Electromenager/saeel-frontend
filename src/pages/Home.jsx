import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Menu from '../components/Menu';
import '../styles/Home.css';
import Search from '../components/Search';
import SwiperHome from '../components/SwiperHome';
import ArgumentHome from '../components/ArgumentHome';
import TopRatedHome from '../components/TopRatedHome';

export default function Home() {
  return (
    <Container maxWidth="xl">
      <div className="test"></div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
      >
        {/* Menu */}
        <Grid item xs={2}>
          <Grid style={{ height: '100%' }}>
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
            sx={{ padding: '0 50px', rowGap: '50px' }}
          >
            <Search />
            <SwiperHome />
            <ArgumentHome />
            <TopRatedHome />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
