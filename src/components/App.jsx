import React from 'react';
import ContactForm from './ContactForm'; 
import ContactList from './ContactList';
import Filter from './Filter'; 
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

export default App;