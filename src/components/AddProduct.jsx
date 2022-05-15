import { Button, Grid ,TextField} from '@mui/material'
import React from 'react'

export default function AddProduct() {

  const textForStorage = 'Hello World.'


localStorage.setItem('my-key', textForStorage);


const textFromStorage = localStorage.getItem('my-key');
console.log(textFromStorage)
  return (

<Grid  m={5} p={5} border="black 1px solid" >

<Grid><h3>ajouter un produit </h3></Grid>
<TextField
            id="nom"
            label="nom produit"
            variant="standard"
         style={{width:"40%",margin:"30PX"}}
      
          />
          <TextField
            id="nom"
            label="nom produit"
            variant="standard"
            style={{width:"40%",margin:"30PX"}}
      
      
          />
              <TextField
            id="nom"
            label="nom produit"
            variant="standard"
            style={{width:"40%",margin:"30PX"}}
      
      
          />    <TextField
          id="nom"
          label="nom produit"
          variant="standard"
          style={{width:"40%",margin:"30PX"}}
    
    
        />    <TextField
        id="nom"
        label="nom produit"
        variant="standard"
        style={{width:"40%",margin:"30PX"}}
  
  
      />
      <Button         style={{width:"20%",margin:"40PX"}}>ajouter produit</Button>

</Grid>



  )
}
