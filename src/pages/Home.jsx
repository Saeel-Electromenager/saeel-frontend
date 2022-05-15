import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Menu from '../components/Menu';
import '../styles/Home.css';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {
  const [activeClasse, setActiveClasse] = React.useState('Home');
  return (
    <Container maxWidth="100%">
      <Header />
      <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Menu */}
        <Grid
          sx={{
            display: useMediaQuery('(min-width:650px)') ? 'block' : 'none',
          }}
        >
          <Grid style={{ marginTop: 30 }}>
            <Menu
              activeClasse={activeClasse}
              setActiveClasse={setActiveClasse}
            />
          </Grid>
        </Grid>

        <Grid item xs={useMediaQuery('(min-width:650px)') ? 10 : 12}>
          <Grid
            sx={{
              padding: useMediaQuery('(min-width:650px)')
                ? '20px 50px 100px 50px'
                : '10px 10px 40px 10px',
              rowGap: '50px',
              borderRadius: '13px',
              backgroundColor: '#fcfcfc',
            }}
          >
            <Body
              activeClasse={activeClasse}
              setActiveClasse={setActiveClasse}
            />
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
