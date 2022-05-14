import { Grid, Typography, Divider } from '@mui/material';
import * as React from 'react';

export default function CategoriesHome() {
  const [catalogue] = React.useState([
    {
      title: 'Cuisinière à gaz',
      contents: [
        'Cuisinière marque Samsung',
        'Cuisinière marque LG',
        'Cuisinière marque Apple',
        'Cuisinière marque Lenevo',
      ],
    },
    {
      title: 'Four Micro-Ondes',
      contents: [
        'Four Micro-Ondes Samsung',
        'Four Micro-Ondes LG',
        'Four Micro-Ondes Apple',
        'Four Micro-Ondes Lenevo',
      ],
    },
    {
      title: 'Mini Four',
      contents: [
        'Mini Four marque Samsung',
        'Mini Four marque LG',
        'Mini Four marque Apple',
        'Mini Four marque Lenevo',
      ],
    },
    {
      title: 'Plaque de cuisson',
      contents: [
        'Hotte Aspirante Samsung',
        'Hotte Aspirante LG',
        'Hotte Aspirante Apple',
        'Hotte Aspirante Lenevo',
      ],
    },
    {
      title: 'Hotte Aspirante',
      contents: [
        'Hotte Aspirante Samsung',
        'Hotte Aspirante LG',
        'Hotte Aspirante Apple',
        'Hotte Aspirante Lenevo',
      ],
    },
    {
      title: 'Lave Linge',
      contents: [
        'Hotte Aspirante Samsung',
        'Hotte Aspirante LG',
        'Hotte Aspirante Apple',
        'Hotte Aspirante Lenevo',
      ],
    },
    {
      title: 'Climatiseur',
      contents: [
        'Hotte Aspirante Samsung',
        'Hotte Aspirante LG',
        'Hotte Aspirante Apple',
        'Hotte Aspirante Lenevo',
      ],
    },
    {
      title: 'Lave Vaisselle',
      contents: [
        'Hotte Aspirante Samsung',
        'Hotte Aspirante LG',
        'Hotte Aspirante Apple',
        'Hotte Aspirante Lenevo',
      ],
    },
    {
      title: 'Congélateur & Réfrigérateur',
      contents: [
        'Hotte Aspirante Samsung',
        'Hotte Aspirante LG',
        'Hotte Aspirante Apple',
        'Hotte Aspirante Lenevo',
      ],
    },
  ]);
  return (
    <Grid sx={{ width: '100%' }}>
      <Divider sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '25px',
            lineHeight: '38px',
            textAlign: 'center',
            color: '#1C1C1C',
            margin: 'auto',
          }}
          component="h2"
        >
          Nos clients apprécient
        </Typography>
      </Divider>
      <Grid
        container
        spacing={3}
        direction={{ xs: 'column', md: 'row' }}
        justify="center"
        alignItems="stretch"
      >
        {catalogue.map((element, index1) => {
          return (
            <Grid item xs={4} sx={{}} key={index1}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#1C1C1C',
                }}
                component="h2"
              >
                {element.title}
              </Typography>
              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                {element.contents.map((content, index2) => {
                  return (
                    <Typography
                      key={index2}
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '17px',
                        lineHeight: '26px',
                        color: '#1C1C1C',
                        display: 'inline-block',
                      }}
                      component="span"
                      variant="span"
                    >
                      {content}
                    </Typography>
                  );
                })}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
