import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Container, Box } from '@mui/material';
import AjoutAdresse from './AjoutAdresse';

export default function ChooseAdressOrder({
  adresses,
  selectedAdress,
  handleChange,
}) {
  return (
    <Container>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Adresse de livraison
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={selectedAdress}
          onChange={handleChange}
        >
          {adresses.map((adress, index) => {
            return (
              <FormControlLabel
                key={`${adress.idAdress}-${index}`}
                value={adress.idAdress}
                control={<Radio />}
                label={`${adress.wilaya}, ${adress.daira}, ${adress.commune} ${
                  parseInt(selectedAdress) === adress.idAdress ? '✅' : ''
                }`}
              ></FormControlLabel>
            );
          })}
          {!adresses.length ? (
            <Box>
              Aucune adresse trouvé
              <AjoutAdresse />
            </Box>
          ) : (
            ''
          )}
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
