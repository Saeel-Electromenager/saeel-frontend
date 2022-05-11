import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  Divider,
  Grid,
  Rating,
  CardMedia,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FA533C',
  },
});

export default function CardProduct({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        bgColor: '#FFFFFF',
        boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
      }}
    >
      <CardMedia
        component="img"
        sx={{ m: 'auto', mt: 6, mb: 3, width: 'calc(100% - 100px)' }}
        image={product.images[0]}
        alt={`image du produit ${product.title}`}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            mb: 3,
          }}
        >
          <StyledRating
            name="rating-star"
            defaultValue={product.rating.rate}
            readOnly
            getLabelText={(value) => `${value} Star${value !== 1 ? 's' : ''}`}
            precision={0.5}
            sx={{
              marginRight: '5px',
            }}
          />
          <Typography
            sx={{
              fontSize: '14px',
              color: '#FA533C',
              marginLeft: '5px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
            }}
            component="span"
            color="text.secondary"
          >
            ({product.rating.raters})
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            textAlign: 'center',
            fontSize: '17px',
          }}
          component="div"
        >
          {product.title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            my: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              textDecoration: 'line-through',
              fontSize: '14px',
            }}
            component="span"
            color="text.secondary"
          >
            {product.price + ',00 DA'}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontSize: '13px',
              color: '#FA533C',
              border: '4px solid #FA533C',
              p: '3px',
              marginLeft: '5px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 600,
            }}
            color="text.secondary"
          >
            -{Math.trunc((product.discount * 100) / product.price)}%
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: '22px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            textAlign: 'center',
          }}
          component="h4"
        >
          {product.price - product.discount + ',00 DA'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={[
            {
              m: '0 auto 15px auto',
              fontSize: '15px',
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              textAlign: 'center',
              bgcolor: '#FA533C',
            },
            (theme) => ({
              '&:hover': {
                bgcolor: '#FF2406',
              },
            }),
          ]}
          variant="contained"
        >
          Voir plus
        </Button>
      </CardActions>
    </Card>
  );
}
