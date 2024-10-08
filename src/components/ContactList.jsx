import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  
  const contacts = useSelector((state) => state.contacts.items); 
  const filter = useSelector((state) => state.contacts.filter); 


  if (!contacts || !filter) {
    console.error('Contacts or filter are undefined:', { contacts, filter });
    return null; 
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