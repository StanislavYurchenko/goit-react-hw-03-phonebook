import React from 'react';

function ContactList({ contacts, filter, removeContactById }) {
  const markupContact = (contact, removeContact) => {
    return (
      <li key={contact.id}>
        <span>
          {contact.name}: {contact.number}
        </span>
        <button onClick={() => removeContact(contact.id)}>Delete</button>
      </li>
    );
  };

  return (
    <>
      {!!contacts.length && (
        <ul>
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
