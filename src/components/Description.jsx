import React from 'react';
import { Box, Typography } from '@mui/material';

const Description = ({ description }) => (
  <Box mt={4}>
    <Typography variant="body1">{description}</Typography>
  </Box>
);

export default Description;