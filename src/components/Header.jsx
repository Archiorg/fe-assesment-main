import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Icon } from '@mui/material';
import CartIcon from "../assets/icons/cart.svg?react";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Product Page
      </Typography>
      <IconButton color="inherit">
        <CartIcon width="24" height="24" />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
