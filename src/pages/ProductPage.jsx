import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Header from '../components/Header';
import ProductImage from '../components/cmn/ProductImage';
import Thumbnail from '../components/cmn/Thumbnail';
import ButtonAddToCart from '../components/cmn/ButtonAddToCart';
import StarRating from '../components/cmn/StarRating';
import Description from '../components/Description';
import DetailsAndPricing from '../components/DetailsAndPricing';
import data from '../data/data.json';

const ProductPage = () => (
  <>
    <Header />
    <Box sx={{ padding: 4 }}>
      {/* Main Content */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' },
          gap: 4,
        }}
      >
        {/* Product Image Section */}
        <Box>
          <ProductImage src={data.article.images[0]} alt={data.article.title} />
          <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
            <Thumbnail src="/path/to/thumb1.jpg" alt="Thumbnail 1" />
            <Thumbnail src="/path/to/thumb2.jpg" alt="Thumbnail 2" />
          </Box>
        </Box>

        {/* Product Details Section */}
        <Box>
          <Typography variant="h4" gutterBottom>
            {data.product.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            by {data.product.supplier}
          </Typography>
          <StarRating value={data.product.rating} />
          <Typography variant="h6" sx={{ marginTop: 2, color: 'primary.main' }}>
            {data.product.price} EUR
          </Typography>
          <Typography variant="body2">
            + {data.product.shippingCost} EUR shipping
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            All prices incl. {data.product.taxes}% taxes
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 4 }}>
            <AddToCartButton onClick={() => console.log('Added to cart')} />
            <Button variant="outlined" color="secondary">
              Save to Wishlist
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Description Section */}
      <Description description={data.description} />

      {/* Details and Pricing Section */}
      <DetailsAndPricing details={data.details} pricing={data.pricing} />
    </Box>
  </>
);

export default ProductPage;
