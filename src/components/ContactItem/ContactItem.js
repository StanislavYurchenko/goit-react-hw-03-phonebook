import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

function ContactItem({ contact, removeContact }) {
  return (
    <li key={contact.id} className={styles.contact}>
      <div>
        <span className={styles['contact-name']}>{contact.name}:</span>
        <span className={styles['contact-number']}>{contact.number}</span>
      </div>

      <button
        className={styles['remove-btn']}
        onClick={() => removeContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.defaultProps = {
  contacts: {
    number: '',
  },
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string,
  }),
  removeContactById: PropTypes.func.isRequired,
};

export default ContactItem;
