import React from "react";
import { Typography } from "@mui/material";

const SectionSubTitle = ({ title }) => (
  <Typography variant="h6" gutterBottom
    sx={{ 
    color: 'var(--dark-grey)', 
    paddingLeft: '0.35rem',
    fontWeight: 'light',
    fontSize: '14px' }}>
    {title}
  </Typography>
);

export default SectionSubTitle;