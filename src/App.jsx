import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { useSelector } from 'react-redux';
import {
  addContact,
  deleteContacts,
  selectContacts,
  selectFilter,
  setFilter,
} from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleSubmit = contact => {
    dispatch(addContact(contact));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const getFilterContacts = () => {
    return contacts.filter(({ name }) => {
      name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const filteredContacts = getFilterContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
};
