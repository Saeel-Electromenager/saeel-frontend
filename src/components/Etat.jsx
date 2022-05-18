import {
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams } from 'react-router-dom';

import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, List } from '@mui/material';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

function SimpleDialog(props) {
  const { idUser } = useParams();
  const { onClose, selectedValue, open, userType } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const [type, setType] = React.useState('');

  React.useEffect(() => {
    if (userType) setType(userType);
  }, [userType]);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  function valideChange(event) {
    event.preventDefault();
    axios(axiosConfig('PUT', `/api/user/upgrade/${idUser}`, { type }))
      .then((res) => {
        onClose(false);
      })
      .catch((error) => console.log(error));
    console.log(type);
  }

  return (
    <Dialog
      component="form"
      onSubmit={valideChange}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle>Modifier le type de l'utilisateur</DialogTitle>

      <List sx={{ p: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem
              sx={{ color: userType === 0 ? 'green' : 'black' }}
              value={0}
            >
              User
            </MenuItem>
            <MenuItem
              sx={{ color: userType === 1 ? 'green' : 'black' }}
              value={1}
            >
              Fournisseur
            </MenuItem>
            <MenuItem
              sx={{ color: userType === 2 ? 'green' : 'black' }}
              value={2}
            >
              Modérateur
            </MenuItem>
          </Select>

          <Button sx={{ mt: 3 }} type="submit">
            Confirmer
          </Button>
        </FormControl>
      </List>
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default function SimpleDialogDemo({ userType }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box>
      <Grid>
        <IconButton aria-label="more" onClick={handleClickOpen}>
          <MoreVertIcon />
        </IconButton>
      </Grid>

      <SimpleDialog
        userType={userType}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Box>
  );
}
