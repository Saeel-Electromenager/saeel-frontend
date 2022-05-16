import { Grid, Button, Input, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

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

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle style={{ minWidth: '400px' }}>
        ajouter une nouvelle categorie
      </DialogTitle>

      <List sx={{ pt: 0 }}>
        <TextField
          label="catégorie"
          value={values.categorie}
          onChange={handleChange('categorie')}
        ></TextField>
        <label htmlFor="contained-button-file" style={{}}>
          {' '}
          <br />
          <br />
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            add picture
          </Button>
          <br />
          <br />
          <Grid ml="300px">
            {' '}
            <Button style={{ margin: 'auto' }} variant="contained">
              ajouter cat
            </Button>{' '}
          </Grid>
        </label>
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

export default function SimpleDialogDemo() {
  const [values, setValues] = React.useState({
    categorie: '',

  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(event.target.value)
  };

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

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
        <Button onClick={handleClickOpen}>Categorie</Button>
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
