import React from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import styles from './ContactList.module.css'; 

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);

    if (!contacts) {
        return <p>No contacts available</p>;
    }

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <ul className={styles.contactList}>
            {filteredContacts.map(contact => (
                <ContactListItem key={contact.id} contact={contact} />
            ))}
        </ul>
    );
};

export default ContactList;