import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../store/contactsSlice'; // Ensure this is correct

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <input
      type="text"
      onChange={handleFilterChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;