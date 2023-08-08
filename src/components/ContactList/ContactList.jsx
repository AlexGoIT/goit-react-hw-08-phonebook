import { List } from './ContactList.styled';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isNotEmptyList = contacts?.length > 0;

  // Filter
  const contactFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <List>
      {isNotEmptyList &&
        contactFilter().map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
    </List>
  );
};

export default ContactList;
