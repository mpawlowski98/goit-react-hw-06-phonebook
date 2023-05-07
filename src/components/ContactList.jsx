import { selectFilteredContacts } from 'redux/contactsSlice';
import ContactListItem from './ContactListItem';
import { useSelector } from 'react-redux';
function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} />
      ))}
    </ul>
  );
}
export default ContactList;
