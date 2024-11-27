import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const AddToCartSection = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <TextField
        type="number"
        defaultValue={1}
        size="small"
        sx={{
          width: '4rem',
          borderRadius: '0',
          '& .MuiOutlinedInput-root': {
            borderRadius: '0',
          },
        }}
      />
      <Typography>{'PCE'}</Typography>

      <Button
        variant="text"
        size="medium"
        sx={{
          backgroundColor: 'var(--primary-color)',
          color: '#fff',
          borderRadius: '0',
          textTransform: 'none',
          fontWeight: 'light',
          '&:hover': {
            backgroundColor: '#e68900',
          },
        }}
      >
        + Add to Cart
      </Button>
    </Box>
  );
};

export default AddToCartSection;
