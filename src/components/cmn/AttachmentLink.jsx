import React from 'react';
import { Link } from '@mui/material';

const AttachmentLink = ({ text, href }) => (
  <Link href={href} target="_blank" rel="noopener" underline="hover" sx={{ fontSize: '14px' }}>
    {text}
  </Link>
);

export default AttachmentLink;