import { AppBar, Container } from '@mui/material';

const Appbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <h1>Phonebook</h1>
      </Container>
    </AppBar>
  );
};

export default Appbar;
