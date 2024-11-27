import React from 'react';
import { Box } from '@mui/material';
import Details from './Details';
import PricingAndShipping from './PricingAndShipping';

const DetailsAndPricing = ({ product }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 2,
      marginTop: 4,
      width: '100%'
    }}>

    <Box flex={1}>
      <Details
        features={product.features}
        attachments={product.attachments}
        keywords={product.keywords}
      />
    </Box>

    <Box flex={1}>
      <PricingAndShipping product={product}/>
    </Box>
  </Box>
);

export default DetailsAndPricing;
