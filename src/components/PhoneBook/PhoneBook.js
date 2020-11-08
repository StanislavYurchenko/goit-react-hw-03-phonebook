import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

const defaultState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class PhoneBook extends Component {
  state = {
    ...defaultState,
  };

  addContact = newContact => {
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  removeContactById = idToRemove => {
    const { contacts } = this.state;
    this.setState({ contacts: contacts.filter(({ id }) => idToRemove !== id) });
  };

  isExistContact = name => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name === name);
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} isExistContact={this.isExistContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChange} />
        <ContactList filter={filter} contacts={contacts} removeContactById={this.removeContactById} />
      </div>
    );
  }
}
export default PhoneBook;
