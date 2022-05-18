import { Grid, Button, TextField } from '@mui/material';
import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, List } from '@mui/material';
import axios from 'axios';
import axiosConfig from '../configurations/axiosConfig';

function SimpleDialog({
  onClose,
  selectedValue,
  open,
  values,
  handleChange,
  addCategory,
}) {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      component="form"
      onSubmit={addCategory}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle style={{ minWidth: '400px' }}>
        Créer une nouvelle categorie
      </DialogTitle>
      <List sx={{ mx: 5, mb: 4 }}>
        <TextField
          label="Nom de la catégorie"
          value={values.categorie}
          fullWidth
          onChange={handleChange('name')}
        ></TextField>
        <TextField
          label="URL de l'image"
          value={values.categorie}
          fullWidth
          sx={{ my: 1 }}
          onChange={handleChange('image')}
        ></TextField>
        <Grid textAlign="center">
          <Button type="submit">Créer</Button>
        </Grid>
      </List>
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default function SimpleDialogDemo() {
  const [values, setValues] = React.useState({
    name: '',
    image: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(event.target.value);
  };

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    console.log('dd');
    setOpen(false);
    setSelectedValue(value);
  };

  const addCategory = (event) => {
    event.preventDefault();
    axios(axiosConfig('POST', '/api/category/add', values))
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Grid sx={{ marginTop: 3 }}>
        <Button onClick={handleClickOpen}>
          Ajouter une nouvelle catégorie
        </Button>
      </Grid>

      <SimpleDialog
        handleChange={handleChange}
        values={values}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        addCategory={addCategory}
      />
    </div>
  );
}
