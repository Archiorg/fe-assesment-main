import React from "react";
import { Box, Divider } from "@mui/material";
import SectionTitle from "./cmn/SectionTitle";
import PriceBreaksTable from "./PriceBreakTable";
import KeyValueList from "./cmn/KeyValueList";

const PricingAndShipping = ({ product }) => {
  const additionalInfo = [
    { key: "Minimum order", value: `${product.minimum_order_quantity} PCE` },
    { key: "Shipping", value: `${product.transport_costs} EUR` },
    { key: "Delivery", value: `${product.delivery_time} days` },
  ];

  return (
    <Box sx={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingX: '1rem',
      paddingY: '1rem',
      height: '18.75rem'}}>
        <Box>
          <SectionTitle title="PRICING & SHIPPING"/>
          <Divider sx={{ marginY: '0.5rem' }}/>
          <KeyValueList data={additionalInfo}/>
        </Box>

        <PriceBreaksTable priceBreaks={product.price_breaks}/>
    </Box>
    
  );
};

export default PricingAndShipping