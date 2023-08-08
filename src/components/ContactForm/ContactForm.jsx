import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Form } from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (contacts.some(contact => contact.name === name)) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        pattern="^([A-Za-z-']{1,50})|([А-Яа-я-']{1,50})$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        sx={{ mb: 2 }}
      />
      <TextField
        id="tel"
        name="number"
        label="Number"
        variant="outlined"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        pattern="^+d{2}(d{3})d{3}-d{2}-d{2}$"
        required
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit" sx={{ mb: 4 }}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
