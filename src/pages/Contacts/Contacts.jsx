import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Container } from '@mui/material';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { ListTitle } from 'components/App.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      ref.current = false;
      return;
    }

    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container className="container" maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <ContactForm />
      <ListTitle>Contacts</ListTitle>
      <Filter />
      {!error && <ContactList />}
      {isLoading && !error && <Loader />}
    </Container>
  );
};

export default Contacts;
