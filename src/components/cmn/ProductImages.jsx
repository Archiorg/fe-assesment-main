import React from 'react';
import { Box } from '@mui/material';
import fallbackImage from '../../assets/icons/package.svg'; // Import fallback image
import zoomInIcon from '../../assets/icons/zoom-in.svg'; // Import zoom-in icon

const ProductImages = ({ images }) => {
  const handleImageError = (event) => {
    event.target.src = fallbackImage; // Replace the image with the fallback image on error
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        alignItems: 'flex-start',
      }}
    >
      {/* Left: Thumbnails */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: '80px',
              height: '80px',
              border: '1px solid #ddd',
            }}
          >
            <Box
              component="img"
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onError={handleImageError}
              sx={{
                transform: 'scale(0.5)',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Right: Main Image with Zoom Icon */}
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
        {/* Main Image */}
        <Box
          component="img"
          src={images[0]} // should be selected
          alt="Main Product Image"
          onError={handleImageError}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'scale-down',
          }}
        />

        <Box
          component="img"
          src={zoomInIcon}
          alt="Zoom-In Icon"
          sx={{
            position: 'absolute',
            bottom: '0px',
            right: '0px',
            width: '40px', 
            height: '40px',
            zIndex: 10,
            transform: 'scale(0.6)'
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductImages;
