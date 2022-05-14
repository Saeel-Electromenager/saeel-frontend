import * as React from 'react';
import { Container, Grid } from '@mui/material';
import Menu from '../components/Menu';
import '../styles/Home.css';
import Body from '../components/Body';

export default function Home() {
  const [activeClasse, updateActiveClasse] = React.useState('Home');
  return (
    <Container maxWidth="100%">
      <div style={{ padding: 50 }} className="test"></div>
      <Grid
        container
        direction="row"
        display="flex"
        wrap="nowrap"
        justify="center"
        alignItems="stretch"
      >
        {/* Menu */}
        <Grid item display={window.innerWidth < 600 ? 'none' : 'block'}>
          <Grid style={{ height: '100%', marginTop: 50 }}>
            <Menu
              activeClaase={activeClasse}
              updateActiveClasse={updateActiveClasse}
            />
          </Grid>
        </Grid>

        <Grid
          item
          style={{
            paddingTop: '10px',
            borderRadius: '13px',
            backgroundColor: '#fcfcfc',
            width: '100%',
          }}
        >
          <Body activeClasse={activeClasse} />
        </Grid>
      </Grid>
    </Container>
  );
}
