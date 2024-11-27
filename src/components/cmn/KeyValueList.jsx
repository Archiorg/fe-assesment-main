import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

const KeyValueList = ({ data }) => (
  <List
    sx={{
      pl: '1.5rem',
      paddingY: '0',
      listStyleType: 'disc',
      '& .MuiListItem-root': {
        display: 'list-item',
      },
    }}>
    {data.map(({ key, value }) => (
      <ListItem key={key} sx={{ padding: '0', height: '1.2rem' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--dark-grey)',
              padding: '0',
              marginRight: '0.5rem',
              fontWeight: 'light',
              fontSize: '14px',
            }}>
            {key}:
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '14px' }}>
            {value}
          </Typography>
        </Box>
      </ListItem>
    ))}
  </List>
);

export default KeyValueList;
