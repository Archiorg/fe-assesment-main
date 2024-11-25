import React from 'react';
import { Button } from '@mui/material';

const ButtonAddToCart = ({ onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    Add to cart
  </Button>
);

export default ButtonAddToCart;