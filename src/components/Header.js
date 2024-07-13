import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Brightness4, Brightness7 } from '@material-ui/icons';

function Header({ toggleTheme }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <IconButton edge="end" color="inherit" onClick={toggleTheme}>
          <Brightness4 />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;