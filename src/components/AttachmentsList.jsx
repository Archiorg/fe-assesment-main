import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import attachmentIcon from '../assets/icons/attachment.svg';
import AttachmentLink from '../components/cmn/AttachmentLink';

const AttachmentsList = ({ attachments }) => (
  <>
    <List
      sx={{
        padding: 0,
        '& .MuiListItem-root': {
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0 0.35rem',
        },
      }}>
      {attachments.map((attachment, index) => (
        <ListItem key={index}>
          <Box
            component="img"
            src={attachmentIcon}
            sx={{
              width: '0.75rem',
              height: '0.75rem',
            }}
          />
          <AttachmentLink text={attachment.file_label} href={attachment.file_link} />
        </ListItem>
      ))}
    </List>
  </>
);

export default AttachmentsList;
