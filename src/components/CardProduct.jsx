import * as React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  Rating,
  CardMedia,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FA533C',
  },
});

export default function CardProduct({ product, marker }) {
  // testing
  product.rating = { rate: 4, raters: 22 };
  function getImage(product) {
    console.log(product);
    if (!product.Images)
      return 'https://www.01net.com/mrf4u/statics/i/ps/img.bfmtv.com/c/630/420/1ab/aaa7d2917a46d9915bde5b6120b59.jpg?width=1200&enable=upscale';
    else if (product.Images.length > 0) return product.Images[0].url;
    else
      return 'https://www.01net.com/mrf4u/statics/i/ps/img.bfmtv.com/c/630/420/1ab/aaa7d2917a46d9915bde5b6120b59.jpg?width=1200&enable=upscale';
  }
  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'visible',
        width: window.innerWidth < 992 ? '100%' : '250px',
        bgColor: '#FFFFFF',
        boxShadow: 'inset 0px 2px 5px rgba(0, 0, 0, 0.25)',
        borderRadius: '14px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        sx={{ m: 'auto', mt: 6, mb: 3, width: 'calc(100% - 100px)' }}
        image={getImage(product)}
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

        {parseInt(product.discount) !== 0 ? (
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
              -{product.discount}%
            </Typography>
          </Box>
        ) : (
          ''
        )}

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
          {Math.trunc(product.price * (1 - product.discount / 100)) + ',00 DA'}
        </Typography>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Link sx={{ m: 'auto' }} to={`/product/${product.idProduct}`}>
            <Button
              sx={[
                {
                  m: '15px auto 0 auto',
                  fontSize: '15px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  textAlign: 'center',
                  bgcolor: '#FA533C',
                  borderRadius: '8px',
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
          </Link>
        </CardActions>
      </CardContent>
      <Box
        style={{
          top: 30,
          left: -5,
          zIndex: '22',
          position: 'absolute',
          p: '30px',
        }}
      >
        <svg
          width="72"
          height="27"
          viewBox="0 0 72 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
          }}
        >
          <path d="M0 0H58V24H0V0Z" fill="#FA533C" />
          <path d="M5 27L0 24H5V27Z" fill="#A33D2F" />
          <path d="M72 0L58 12V0H72Z" fill="#FA533C" />
          <path d="M72 24H58V12L72 24Z" fill="#FA533C" />
        </svg>
        <span
          style={{
            zIndex: '22',
            position: 'absolute',
            left: 13,
            top: 1,
            fontSize: '14px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 500,
            color: '#FCFCFC',
          }}
        >
          {marker}
        </span>
      </Box>
    </Card>
  );
}
