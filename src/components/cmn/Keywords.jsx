import React from 'react';
import { Chip, Box } from '@mui/material';

const Keywords = ({ keywords }) => (
  <Box>
    {keywords.map((keyword, index) => (
      <Chip 
        key={index} 
        label={keyword.toUpperCase()} 
        style={{ 
          marginRight: '8px', 
          marginBottom: '8px', 
          color: 'white', backgroundColor: 'var(--dark-grey)' }} />
    ))}
  </Box>
);

export default Keywords;