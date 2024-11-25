import React from 'react';
import { Chip, Box } from '@mui/material';

const Keywords = ({ keywords }) => (
  <Box>
    {keywords.map((keyword, index) => (
      <Chip key={index} label={keyword} style={{ marginRight: '8px', marginBottom: '8px' }} />
    ))}
  </Box>
);

export default Keywords;