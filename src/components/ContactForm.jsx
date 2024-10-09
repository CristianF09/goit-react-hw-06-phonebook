import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store/contactsSlice'; 

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(), 
      name,
      number,
    };
    dispatch(addContact(contact)); 
    setName(''); 
    setNumber(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Contact Name"
        required
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Contact Number"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;