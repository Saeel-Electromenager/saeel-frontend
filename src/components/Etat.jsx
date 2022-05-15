import {
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import * as React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@mui/material/ListItem';

import DialogTitle from '@mui/material/DialogTitle';
import { Dialog, List } from '@mui/material';

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log('ttttt' + event.target.value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Modifier Status Profile</DialogTitle>

      <List sx={{ pt: 0 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={0}>user</MenuItem>
            <MenuItem value={1}>fornesseur</MenuItem>
            <MenuItem value={2}>moderateur</MenuItem>
          </Select>
        </FormControl>

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
        <IconButton aria-label="more" onClick={handleClickOpen}>
          <MoreVertIcon />
        </IconButton>
      </Grid>

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
