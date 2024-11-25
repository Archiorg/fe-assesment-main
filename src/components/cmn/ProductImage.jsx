import React, { useState } from 'react';
import { Box } from '@mui/material';

const ProductImage = ({ src, alt, fallbackSrc = "../../assets/icons/pachage.svg" }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <Box
      component="img"
      src={imageSrc}
      alt={alt}
      onError={handleError}
      sx={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        border: '1px solid #ccc',
        objectFit: 'cover',
      }}
    />
  );
};

export default ProductImage;
