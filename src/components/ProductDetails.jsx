import React, { useState, useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';
import AddToCartSection from '../components/cmn/AddToCartSection';
import CustomRating from '../components/cmn/CustomRating';
import DiscountIcon from '../assets/icons/discount.svg';
import { useCart } from '../store/CartContext';

const ProductDetails = ({ title, supplierName, supplierLink, price, currency, transportCosts, stars, vatPercent }) => {
  const {  updateCartCount } = useCart();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '25rem',
      }}>
      <Box sx={{ flexGrow: '1' }}>
        <Typography variant="h6" sx={{ fontWeight: '400', fontSize: '20px', width: '25rem' }}>
          {title}
        </Typography>

        <Typography variant="subtitle1" sx={{ color: '#666', marginBottom: '0.5rem' }}>
          by <Link href={supplierLink}>{supplierName}</Link>
        </Typography>

        <CustomRating value={stars} />

        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1rem',
            flexDirection: 'row',
            alignItems: 'center',
            width: 'fit-content',
            justifyContent: 'space-between',
          }}>
          <Typography variant="h6" sx={{ fontWeight: 'light', color: '#000' }}>
            {price} {currency}
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--dark-grey)' }}>
            + {transportCosts} {currency} shipping
          </Typography>
          <Box sx={{ width: '1rem', height: '1rem' }}>
            <img src={DiscountIcon} alt="Discount" />
          </Box>
        </Box>
        <Typography variant="body2" sx={{ color: 'var(--dark-grey)' }}>
          all prices incl. {vatPercent}% taxes
        </Typography>
      </Box>

      <AddToCartSection isVisible='true'
        onAddToCart={updateCartCount}
      />
    </Box>
  );
};

export default ProductDetails;
