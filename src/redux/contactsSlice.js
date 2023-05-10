const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id === action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const selectContacts = state => state.contacts.contacts;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
export default contactsSlice.reducer;
