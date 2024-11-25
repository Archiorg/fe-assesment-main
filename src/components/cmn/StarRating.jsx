import React from 'react';
import { Rating } from '@mui/material';

const StarRating = ({ value, readOnly = true }) => (
  <Rating value={value} readOnly={readOnly} />
);

export default StarRating;