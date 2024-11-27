import React from "react";
import { Typography } from "@mui/material";

const Paragraph = ({ text }) => (
  <Typography variant="body1" 
    sx={{ 
      paddingY: '0.5rem', 
      maxWidth: '100%',
      letterSpacing: 0,
      lineHeight: '1.2',
      wordSpacing: 'normal' }}>
    {text}{text}
  </Typography>
);

export default Paragraph;