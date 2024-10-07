import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  // Accessing the contacts and filter from the Redux store
  const contacts = useSelector((state) => state.contacts.items); // Adjust according to your state structure
  const filter = useSelector((state) => state.contacts.filter); // Ensure the state path is correct

  // Check if contacts or filter are undefined
  if (!contacts || !filter) {
    console.error('Contacts or filter are undefined:', { contacts, filter });
    return null; // Handle undefined state gracefully
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;