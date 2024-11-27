import React from 'react';
import { Box, Badge } from '@mui/material';

const ShoppingCartWithCount = ({ count, iconSrc }) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      {/* Badge for Count */}
      <Badge
        badgeContent={count}
        color=""
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
            border: '1px solid #fff'
          },
        }}
      />

      <Box
        component="img"
        src={iconSrc}
        alt="Shopping Cart"
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          cursor: 'pointer',
          fill: 'palegreen'
        }}
      />
    </Box>
  );
};

export default ShoppingCartWithCount;
