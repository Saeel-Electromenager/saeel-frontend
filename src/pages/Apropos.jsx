import * as React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Menu from '../components/Menu';
import '../styles/Home.css';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';
import { color } from '@mui/system';
import Emsaeel from '../assets/emsaeel.jpg';
import propos from '../assets/propos.png';
import lassal from '../assets/lassal.jpg';
import melonchon from '../assets/melonchon.jpg';
import zemout from '../assets/zemout.jpg';
import lepen from '../assets/lepen.jpg';
import '../styles/Apropos.css';

export default function Apropos() {
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
            <Grid>
              <Grid textAlign={'center'}>
                <img
                  src={propos}
                  alt="image a propos"
                  width={'100%'}
                  style={{ paddingTop: '15px', paddingBottom: '15px' }}
                />
              </Grid>
              <Grid item md={12} textAlign={'center'}>
                <h2>What we do ?</h2>

                <Typography margin={'auto'} paddingBottom={'40px'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores reiciendis deserunt sed sit perferendis, accusantium,
                  eos consectetur ullam nihil natus libero dicta soluta vero
                  magnam reprehenderit ut veritatis eligendi nulla.
                </Typography>
              </Grid>
              <Grid
                container
                style={{
                  backgroundColor: '#F1F4F5',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <Grid
                  item
                  md={6}
                  style={{ textAlign: 'center', margin: 'auto' }}
                >
                  <img
                    src={lassal}
                    alt="macron"
                    margin={'auto'}
                    height={'350px'}
                    width={'350px'}
                  />
                </Grid>
                <Grid item md={6}>
                  <Grid className="nom">
                    {' '}
                    <h3
                      style={{
                        fontFamily: 'Gill Sans',
                        color: 'black',
                        paddingBottom: '20px',
                      }}
                    >
                      OULHACI Yanis
                    </h3>
                  </Grid>
                  <Typography className="txt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias est, tempora doloribus unde et eos quibusdam id
                    maiores molestiae dolorum voluptatum, quam ab consequatur
                    error? Eligendi cum reprehenderit recusandae est! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
                    voluptas, inventore necessitatibus qui voluptate hic esse.
                    Amet tempora magnam vero, pariatur, illo officia sed commodi
                    cupiditate voluptas dolor laudantium. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Harum blanditiis quae
                    optio ab, repellendus laudantium cumque ad dolorem maxime
                    libero tempore delectus ullam, temporibus, a praesentium.
                    Voluptatum, beatae. Voluptas, dolorem.
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                style={{
                  backgroundColor: 'white',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <Grid
                  item
                  md={6}
                  style={{ paddingLeft: '25px' }}
                  className="nomb"
                >
                  <h3
                    style={{
                      fontFamily: 'Gill Sans',
                      color: 'black',
                      paddingBottom: '20px',
                    }}
                  >
                    MEZADI Mohamed Hamza
                  </h3>
                  <Typography className="txtb">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias est, tempora doloribus unde et eos quibusdam id
                    maiores molestiae dolorum voluptatum, quam ab consequatur
                    error? Eligendi cum reprehenderit recusandae est! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
                    voluptas, inventore necessitatibus qui voluptate hic esse.
                    Amet tempora magnam vero, pariatur, illo officia sed commodi
                    cupiditate voluptas dolor laudantium. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Harum blanditiis quae
                    optio ab, repellendus laudantium cumque ad dolorem maxime
                    libero tempore delectus ullam, temporibus, a praesentium.
                    Voluptatum, beatae. Voluptas, dolorem.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  style={{ textAlign: 'center', margin: 'auto' }}
                >
                  <img
                    src={melonchon}
                    alt="macron"
                    height={'350px'}
                    width={'380px'}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                style={{
                  backgroundColor: '#F1F4F5',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <Grid
                  item
                  md={6}
                  style={{ textAlign: 'center', margin: 'auto' }}
                >
                  <img
                    src={zemout}
                    alt="macron"
                    height={'350px'}
                    width={'380px'}
                  />
                </Grid>
                <Grid item md={6} className="nom">
                  <h3
                    style={{
                      fontFamily: 'Gill Sans',
                      color: 'black',
                      paddingBottom: '20px',
                    }}
                  >
                    MOUHOUS Sidali
                  </h3>
                  <Typography className="txt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias est, tempora doloribus unde et eos quibusdam id
                    maiores molestiae dolorum voluptatum, quam ab consequatur
                    error? Eligendi cum reprehenderit recusandae est! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
                    voluptas, inventore necessitatibus qui voluptate hic esse.
                    Amet tempora magnam vero, pariatur, illo officia sed commodi
                    cupiditate voluptas dolor laudantium. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Harum blanditiis quae
                    optio ab, repellendus laudantium cumque ad dolorem maxime
                    libero tempore delectus ullam, temporibus, a praesentium.
                    Voluptatum, beatae. Voluptas, dolorem.
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                style={{
                  backgroundColor: 'white',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <Grid
                  item
                  md={6}
                  style={{ paddingLeft: '25px' }}
                  className="nomb"
                >
                  <h3
                    style={{
                      fontFamily: 'Gill Sans',
                      color: 'black',
                      paddingBottom: '20px',
                    }}
                  >
                    MESSAD Mouloud
                  </h3>
                  <Typography className="txtb">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias est, tempora doloribus unde et eos quibusdam id
                    maiores molestiae dolorum voluptatum, quam ab consequatur
                    error? Eligendi cum reprehenderit recusandae est! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
                    voluptas, inventore necessitatibus qui voluptate hic esse.
                    Amet tempora magnam vero, pariatur, illo officia sed commodi
                    cupiditate voluptas dolor laudantium. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Harum blanditiis quae
                    optio ab, repellendus laudantium cumque ad dolorem maxime
                    libero tempore delectus ullam, temporibus, a praesentium.
                    Voluptatum, beatae. Voluptas, dolorem.
                  </Typography>
                </Grid>
                <Grid
                  item
                  md={6}
                  style={{ textAlign: 'center', margin: 'auto' }}
                >
                  <img
                    src={Emsaeel}
                    alt="macron"
                    height={'350px'}
                    width={'350px'}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                style={{
                  backgroundColor: '#F1F4F5',
                  paddingTop: '40px',
                  paddingBottom: '40px',
                }}
              >
                <Grid
                  item
                  md={6}
                  style={{ textAlign: 'center', margin: 'auto' }}
                >
                  <img
                    src={lepen}
                    alt="macron"
                    height={'350px'}
                    width={'380px'}
                  />
                </Grid>
                <Grid item md={6} className="nom">
                  <h3
                    style={{
                      fontFamily: 'Gill Sans',
                      color: 'black',
                      paddingBottom: '20px',
                    }}
                  >
                    HENDRICSON Sarah
                  </h3>
                  <Typography className="txt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias est, tempora doloribus unde et eos quibusdam id
                    maiores molestiae dolorum voluptatum, quam ab consequatur
                    error? Eligendi cum reprehenderit recusandae est! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolor sed
                    voluptas, inventore necessitatibus qui voluptate hic esse.
                    Amet tempora magnam vero, pariatur, illo officia sed commodi
                    cupiditate voluptas dolor laudantium. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Harum blanditiis quae
                    optio ab, repellendus laudantium cumque ad dolorem maxime
                    libero tempore delectus ullam, temporibus, a praesentium.
                    Voluptatum, beatae. Voluptas, dolorem.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item md={12} textAlign={'center'} pt={12}>
                <h2>Notre mission</h2>

                <Typography margin={'auto'} paddingBottom={'40px'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores reiciendis deserunt sed sit perferendis, accusantium,
                  eos consectetur ullam nihil natus libero dicta soluta vero
                  magnam reprehenderit ut veritatis eligendi nulla.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
