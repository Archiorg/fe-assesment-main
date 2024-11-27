import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import VerticalSeparator from './cmn/VerticalSeparator';
import AddToCartSection from './cmn/AddToCartSection';
import ShoppingCartWithCount from './cmn/ShoppingCartWithCount';
import FavoriteIcon from '../assets/icons/favorite.svg';
import FactSoft from '../assets/icons/facts-soft.svg';
import CartIcon from '../assets/icons/cart.svg';
import { useCart } from '../store/CartContext';

const Header = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, updateCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      sx={{
        boxShadow: isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #ddd',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: '400',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          color: 'var(--primary-color)',
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <AddToCartSection isVisible={isScrolled} onAddToCart={updateCartCount} />
        <Box component="img" src={FavoriteIcon} sx={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }} />
        <Box component="img" src={FactSoft} sx={{ width: '1.5rem', height: '1.5rem', cursor: 'pointer' }} />
        <VerticalSeparator />
        <ShoppingCartWithCount count={cartCount} iconSrc={CartIcon} />
      </Box>
    </Box>
  );
};

export default Header;
