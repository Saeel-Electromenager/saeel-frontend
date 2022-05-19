import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Container, Button, Box } from '@mui/material';

export default function ChooseAdressOrder({ adresses }) {
  const [selectedAdress, setSelectedAdress] = React.useState('');

  const handleChange = (event) => {
    setSelectedAdress(event.target.value);
    console.log(selectedAdress);
  };

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
              <Button>Ajouter une adresse</Button>
            </Box>
          ) : (
            ''
          )}
        </RadioGroup>
      </FormControl>
    </Container>
  );
}
