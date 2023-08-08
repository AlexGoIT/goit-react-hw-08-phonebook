import { NavLink } from 'react-router-dom';
import { AppBar, Container } from '@mui/material';
import { NavList, Logo, StyledNavLink } from './Appbar.styled';

const Appbar = () => {
  return (
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
      </Container>
    </AppBar>
  );
};

export default Appbar;
