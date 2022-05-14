import { Button, Box, Grid, Typography } from '@mui/material';
import * as React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SwiperHome() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(270deg, rgba(92, 78, 189, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
        borderRadius: '10px',
        width: '100%',
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: '',
      }}
    >
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        margin="10px 0px 20px 10px"
        padding="0"
      >
        <Grid item xs={window.innerWidth < 800 ? 12 : 3}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '20px',
              lineHeight: '30px',
            }}
          >
            Bienvenue sur Saeel!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '20px',
            }}
          >
            Pour vous, des offres de hbaal ! des promos jusqu’à 80%
          </Typography>
          <Grid marginTop="10px" className="swiper-home-show-more">
            <Button endIcon={<ArrowForwardIcon style={{ fontSize: '25px' }} />}>
              Voir plus
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={window.innerWidth < 600 ? 12 : 9}>
          {/* ----- Swiper Here ----- */}
        </Grid>
      </Grid>
    </Box>
  );
}
