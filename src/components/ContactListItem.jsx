import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContacts(id));
  };

  return (
    <li>
      {name}: {number}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

export default ContactListItem;
