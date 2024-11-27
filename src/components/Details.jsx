import React from 'react';
import { Box, Divider } from '@mui/material';
import Keywords from '../components/cmn/Keywords';
import SectionTitle from './cmn/SectionTitle';
import SectionSubTitle from './cmn/SectionSubTitle';
import AttachmentsList from './AttachmentsList';
import KeyValueList from './cmn/KeyValueList';

const Details = ({ features, attachments, keywords }) => {

  const featuresArray = Object.entries(features).map(([key, value]) => ({
    key,
    value,
  }));

  return (

    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingX: '1rem',
        paddingY: '1rem', 
        height: '18.75rem' }}>

      <SectionTitle title="DETAILS"/>

      <Divider sx={{ marginY: '0.5rem' }}/>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'  
      }}>
        <Box>
          <SectionSubTitle title="Features" />
          <KeyValueList data={featuresArray}/>
        </Box>

        <Box>
          <SectionSubTitle title="Attachments"/>
          <AttachmentsList attachments={attachments} />
        </Box>

        <Box>
          <SectionSubTitle title="Keywords"/>
          <Keywords keywords={keywords} />
        </Box>
      </Box>

    </Box>
  );
};

export default Details;
