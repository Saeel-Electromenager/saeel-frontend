import { Grid, Typography, Divider, Drawer } from '@mui/material';
import { Box, width } from '@mui/system';
import * as React from 'react';
import logosaeel from '../assets/Logosaeel.png';
import SAEEL from '../assets/SAEEL.jpg';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react';
import { MuiBox } from './MuiBox';

export default function Header() {
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
            <>
              <MuiBox />
            </>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
}
