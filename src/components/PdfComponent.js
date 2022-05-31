import React from 'react';
import ReactToPrint from 'react-to-print';
import DataComponent from './DataComponent';
import { Button, Grid } from '@mui/material';
class PdfComponent extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => <Button autoFocus>Oui, Imprimer</Button>}
        />
        <Grid sx={{ display: 'none' }}>
          <DataComponent
            order={this.props.order}
            ref={(response) => (this.componentRef = response)}
          />
        </Grid>
      </div>
    );
  }
}
export default PdfComponent;
