import React from 'react';
import styles from './ContactList.module.css';

function ContactList({ contacts, filter, removeContactById }) {
  const markupContact = (contact, removeContact) => {
    return (
      <li key={contact.id} className={styles.contact}>
        <div>
          <span className={styles['contact-name']}>{contact.name}:</span>
          <span className={styles['contact-number']}>{contact.number}</span>
        </div>

        <button className={styles['remove-btn']} onClick={() => removeContact(contact.id)}>
          Delete
        </button>
      </li>
    );
  };

  return (
    <>
      {!!contacts.length && (
        <ul className={styles.contacts}>
          {filter
            ? contacts
              .filter(contact => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()))
              .map(contact => markupContact(contact, removeContactById))
            : contacts.map(contact => markupContact(contact, removeContactById))}
        </ul>
      )}
    </>
  );
}

export default ContactList;
