import React from 'react';
import { Box, Typography } from '@mui/material';
import AttachmentLink from '../components/cmn/AttachmentLink';
import Keywords from '../components/cmn/Keywords';

const Details = ({ features, attachments, keywords }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      DETAILS
    </Typography>

    {/* Features */}
    <Box mt={2}>
      {features.map((feature, index) => (
        <Typography key={index} variant="body1">
          - {feature}
        </Typography>
      ))}
    </Box>

    {/* Attachments */}
    <Box mt={2}>
      <Typography variant="subtitle2">Attachments</Typography>
      {attachments.map((attachment, index) => (
        <AttachmentLink key={index} text={attachment} href={`#${attachment}`} />
      ))}
    </Box>

    {/* Keywords */}
    <Box mt={2}>
      <Typography variant="subtitle2">Keywords</Typography>
      <Keywords keywords={keywords} />
    </Box>
  </Box>
);

export default Details;
