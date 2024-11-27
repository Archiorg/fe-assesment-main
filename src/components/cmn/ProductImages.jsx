import React from 'react';
import { Box } from '@mui/material';
import fallbackImage from '../../assets/icons/package.svg';
import zoomInIcon from '../../assets/icons/zoom-in.svg';

const ProductImages = ({ images }) => {
  const handleImageError = (event) => {
    event.target.src = fallbackImage;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'flex-start',
      }}>
        
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: '5rem',
              height: '5rem',
              border: '1px solid #ddd',
            }}>
            <Box
              component="img"
              src={image}
              onError={handleImageError}
              sx={{
                transform: 'scale(0.5)',
                WebkitTransform: 'scale(0.5)',
                MozTransform: 'scale(0.5)', 
                msTransform: 'scale(0.5)',
                OTransform: 'scale(0.5)',
              }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '25rem',
          height: '25rem',
          border: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={images[0]} // should be selected instead
          onError={handleImageError}
          sx={{
            width: '100%',
            height: '100%',
            transform: 'scale(0.4)',
            WebkitTransform: 'scale(0.4)',
            MozTransform: 'scale(0.4)', 
            msTransform: 'scale(0.4)',
            OTransform: 'scale(0.4)',
          }}
        />

        <Box
          component="img"
          src={zoomInIcon}
          sx={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            width: '3rem', 
            height: '3rem',
            zIndex: 10,
            transform: 'scale(0.5)'
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductImages;
