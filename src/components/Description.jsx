import React from 'react';
import { Box, Typography } from '@mui/material';

const Description = ({ description }) => (
  <Box mt={4}>
    <Typography variant="h6" gutterBottom>
      DESCRIPTION
    </Typography>
    <Typography variant="body1">{description}</Typography>
  </Box>
);

export default Description;