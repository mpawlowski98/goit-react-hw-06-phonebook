import { useDispatch, useSelector } from 'react-redux';
import css from '../App.module.css';
import { selectFilter, setFilter } from '../redux/contactsSlice';

function Filter() {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default Filter;
