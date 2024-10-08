import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit, name, number, onChange }) => {
  return (
    <form onSubmit={onSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="Contact Name"
        className={styles.inputField}
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={onChange}
        placeholder="Phone Number"
        className={styles.inputField}
      />
      <button type="submit" className={styles.addButton}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;