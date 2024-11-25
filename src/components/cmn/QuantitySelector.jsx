import React from 'react';
import { TextField } from '@mui/material';

const QuantitySelector = ({ value, onChange }) => (
  <TextField
    type="number"
    value={value}
    onChange={onChange}
    slotProps={{ input: { min: 1 } }}
    style={{ width: '80px' }}
  />
);

export default QuantitySelector;
