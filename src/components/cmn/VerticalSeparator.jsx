import React from 'react';
import { Box } from '@mui/material';

const VerticalSeparator = () => {
  return (
    <Box
      sx={{
        width: '1px',
        backgroundColor: '#ddd',
        alignSelf: 'stretch'
      }}
    />
  );
};

export default VerticalSeparator;
