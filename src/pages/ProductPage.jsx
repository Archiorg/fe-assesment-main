import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import Header from '../components/Header';
import ProductImages from '../components/cmn/ProductImages';
import ProductDetails from '../components/ProductDetails';
import data from '../data/data.json';

const ProductPage = () => {
  const { article } = data;

  return (
    <Box sx={{ height: '100%' }}>
      {/* Header Section */}
      <Header title={article.title} price={article.price} />

      {/* Main Content */}
      <Box sx={{ padding: '2rem' }}>
        {/* Main Product Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '2rem',
            marginBottom: '2rem',
            alignItems: 'flex-start',
          }}
        >
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
          />
        </Box>

        <Divider sx={{ marginY: '2rem' }} />

        {/* Description Section */}
        <Box sx={{ alignItems: 'flex-start', textAlign: 'left' }}>
          <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
            Description
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6 }}>
            {article.description_long}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
