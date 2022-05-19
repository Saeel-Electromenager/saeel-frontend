import { Grid, Button, TextField } from '@mui/material';

import * as React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';

import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, List } from '@mui/material';

function SimpleDialog({ onClose, selectedValue, open, values, handleChange }) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const br = () => {
    console.log(values);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ minWidth: '550px' }}>nouvelle adresse</DialogTitle>
      <List>
        <Grid p={3} container justifyContent="space-around">
          <TextField
            label="wilaya"
            value={values.wilaya}
            onChange={handleChange('wilaya')}
          ></TextField>
          <TextField
            label="daira"
            value={values.daira}
            onChange={handleChange('daira')}
          ></TextField>
        </Grid>

        <Grid p={3} container justifyContent="space-around">
          <TextField
            label="commune"
            value={values.commune}
            onChange={handleChange('commune')}
          ></TextField>

          <TextField
            label="phone"
            value={values.phone}
            onChange={handleChange('phone')}
          ></TextField>
        </Grid>

        <TextField
          label="adress (rue)"
          rows={2}
          style={{ width: '80%', margin: '15PX' }}
          multiline
          value={values.adress}
          onChange={handleChange('adress')}
        ></TextField>
        <Grid p={4} textAlign="right">
          <Grid>
            <Button onClick={br} variant="contained">
              Contained
            </Button>
          </Grid>
        </Grid>

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick('addAccount')}
        ></ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AjoutAdresse() {
  const [values, setValues] = React.useState({
    wilaya: '',
    daira: '',

    commune: '',
    adress: '',
    phone: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
    <div>
      <Grid>
        <Button onClick={handleClickOpen}>ajouter une adresse</Button>
      </Grid>

      <SimpleDialog
        handleChange={handleChange}
        values={values}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
