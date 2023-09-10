import { NavLink } from 'react-router-dom';

import { AppBar, Container } from '@mui/material';
import Navigation from 'components/Navigation';
import { Logo } from './Appbar.styled';

const Appbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#0057b8' }}>
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
        <Navigation />
      </Container>
    </AppBar>
  );
};

export default Appbar;
