import { Grid, Typography, Divider } from '@mui/material';
import { width } from '@mui/system';
import * as React from 'react';
import logosaeel from '../assets/Logosaeel.png';
import SAEEL from '../assets/SAEEL.jpg';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function F() {
  return (
    <Grid>
      <Stack pb={4} pt={3} direction="row" spacing={1}>
        <img src={SAEEL} alt="logo saeel" height="40" width="160" />

        <Grid item md={6} style={{ width: '100%', color: 'black' }}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="right"
            alignItems="center"
          >
            <IconButton size="large">
              <NotificationsNoneOutlinedIcon
                style={{ color: '#CACCD9' }}
                fontSize="inherit"
              />
            </IconButton>

            <Divider
              sx={{ height: 28, color: '#CACCD9', borderRightWidth: '3px' }}
              orientation="vertical"
            />

            <IconButton size="large">
              <DehazeIcon style={{ color: '#CACCD9' }} fontSize="inherit" />
            </IconButton>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
}
