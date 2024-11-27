import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ title }) => (
  <Typography variant="h6" 
      sx={{ 
      marginBottom: 'rem', 
      fontWeight: '400',
      color: 'var(--primary-color)' }}>
    {title}
  </Typography>
);

export default SectionTitle;