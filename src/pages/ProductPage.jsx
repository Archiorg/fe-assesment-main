import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Header from '../components/Header';
import ProductImages from '../components/cmn/ProductImages';
import ProductDetails from '../components/ProductDetails';
import data from '../data/data.json';
import DetailsAndPricing from '../components/DetailsAndPricing';
import SectionTitle from '../components/cmn/SectionTitle';
import Paragraph from '../components/cmn/Paragraph';
import { useState } from 'react';

const ProductPage = () => {
  const { article } = data;
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Box sx={{ height: '100%', backgroundColor: 'var(--light-grey)' }}>
      <Header title={article.title} price={article.price} />
      <Box sx={{ backgroundColor: 'white' }}>
        <Box
          sx={{
            display: 'flex',
            paddingY: '2rem',
            paddingX: '1rem',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '2rem',
            alignItems: 'flex-start',
          }}>
          <ProductImages images={article.images} />
          <ProductDetails
            title={article.title}
            supplierName={article.supplier_name}
            supplierLink={article.supplier_link}
            price={article.price}
            currency={article.currency}
            transportCosts={article.transport_costs}
            stars={article.stars}
            vatPercent={article.vat_percent}
            updateCartCount={updateCartCount}
          />
        </Box>

        <Box sx={{ 
          alignItems: 'flex-start', 
          textAlign: 'left', 
          backgroundColor: 'var(--light-grey)',
          paddingY: '2rem',
          paddingX: '1rem' }}>
          <Box sx={{ maxWidth: '80rem' }}>
            <SectionTitle title="DESCRIPTION"/>
            <Paragraph text={article.description_long} />
            <DetailsAndPricing product={article} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
