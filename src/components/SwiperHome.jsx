import { Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

export default function SwiperHome() {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(270deg, rgba(92, 78, 189, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
        borderRadius: '10px',
        height: '161px',
        width: '100%',
        display: 'grid',
        flexWrap: 'wrap',
        justifyContent: '',
      }}
    >
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="stretch"
        margin={0}
      >
        <Grid item xs={3}>
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
        </Grid>
        <Grid item xs={9}>
          {/* ----- Swiper Here ----- */}
        </Grid>
      </Grid>
    </Box>
  );
}
