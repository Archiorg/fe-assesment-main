import React, { useState, useEffect } from 'react';
import { Box, Badge } from '@mui/material';

const ShoppingCartWithCount = ({ count, iconSrc }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Badge
        badgeContent={count}
        sx={{
          '& .MuiBadge-badge': {
            position: 'absolute',
            top: '0px',
            right: '-20px',
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
            fontSize: '0.6rem',
            fontWeight: 'light',
            borderRadius: '50%',
            border: '1px solid #fff',
            transform: isAnimating ? 'scale(1.3)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          },
        }}
      />

      <Box
        component="img"
        src={iconSrc}
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          cursor: 'pointer',
          animation: isAnimating
            ? `bounce 0.3s ease` 
            : 'none',
          '@keyframes bounce': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-10px)',
            },
          },
        }}
      />
    </Box>
  );
};

export default ShoppingCartWithCount;
