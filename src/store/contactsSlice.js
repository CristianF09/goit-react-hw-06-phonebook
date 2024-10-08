import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], 
    filter: '', 
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    removeContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, updateFilter } = contactsSlice.actions;
export default contactsSlice.reducer;