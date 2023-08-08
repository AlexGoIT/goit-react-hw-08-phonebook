import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import Container from '@mui/material/Container';
import Appbar from './Appbar';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from './Loader';
import { ListTitle } from './App.styled';
import AppFooter from './AppFooter';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Appbar />
      <Container className="container" maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
        <ContactForm />
        <ListTitle>Contacts</ListTitle>
        <Filter />
        {!error && <ContactList />}
        {isLoading && !error && <Loader />}
      </Container>
      <AppFooter />
    </>
  );
};

export default App;
