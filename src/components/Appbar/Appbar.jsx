import { NavLink } from 'react-router-dom';
import { AppBar, Container } from '@mui/material';
import { NavList, Logo, StyledNavLink } from './Appbar.styled';

import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import UserMenu from 'components/UserMenu';

const Appbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container
          maxWidth="sm"
          sx={{
            pt: 2,
            pb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavLink to="/">
            <Logo>Phonebook</Logo>
          </NavLink>
          <nav>
            <NavList>
              <li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/register">Register</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/login">Login</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              </li>
            </NavList>
          </nav>

          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Container>
      </AppBar>
      <UserMenu anchorEl={anchorEl} onClick={handleClose} />
    </>
  );
};

export default Appbar;
