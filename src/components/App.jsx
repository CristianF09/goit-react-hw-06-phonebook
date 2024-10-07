import React from 'react';
import ContactForm from './ContactForm'; // Ensure correct import
import ContactList from './ContactList'; // Ensure correct import
import Filter from './Filter'; // Ensure correct import
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Book</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default App; // Ensure this is a default export