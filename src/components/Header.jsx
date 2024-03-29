import { Grid, Divider } from '@mui/material';
import * as React from 'react';
import SAEEL from '../assets/SAEEL.jpg';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MuiBox from './MuiBox';
import { Link } from 'react-router-dom';

export default function Header({ setActiveClasse }) {
  return (
    <Grid>
      <Stack pb={4} pt={3} direction="row" spacing={1}>
        <Link to="/">
          <img src={SAEEL} alt="logo saeel" height="40" width="160" />
        </Link>

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
              <MuiBox setActiveClasse={setActiveClasse} />
            </>
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
}
