import React from 'react';
import { Box, Typography } from '@mui/material';
import Details from './Details';
import PriceBreakTable from '../components/cmn/PriceBreakTable';

const DetailsAndPricing = ({ details, pricing }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on larger screens
      gap: 4,
      marginTop: 4,
    }}
  >
    {/* Details Section */}
    <Box flex={1}>
      <Typography variant="h6" gutterBottom>
        DETAILS
      </Typography>
      <Details
        features={details.features}
        attachments={details.attachments}
        keywords={details.keywords}
      />
    </Box>

    {/* Pricing & Shipping Section */}
    <Box flex={1}>
      <Typography variant="h6" gutterBottom>
        PRICING & SHIPPING
      </Typography>
      <Typography variant="body1" gutterBottom>
        Minimum order: {pricing.minimumOrder} PCE
      </Typography>
      <Typography variant="body1" gutterBottom>
        Shipping: {pricing.shippingCost} EUR
      </Typography>
      <Typography variant="body1" gutterBottom>
        Delivery: {pricing.deliveryTime} days
      </Typography>

      {/* Price Breaks Table */}
      <PriceBreakTable priceBreaks={pricing.breaks} />
    </Box>
  </Box>
);

export default DetailsAndPricing;
