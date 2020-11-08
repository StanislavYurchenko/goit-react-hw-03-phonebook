import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const defaultState = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = {
    ...defaultState,
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { addContact, isExistContact } = this.props
    isExistContact(name)
      ? alert(`${name} contact already exists`)
      : addContact({ name, number, id: uuidv4() })
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Name</h3>
        <input name="name" value={name} onChange={this.onChange} type='text' />

        <h3>Number</h3>
        <input name="number" value={number} onChange={this.onChange} type='text' />

        <br />

        <button type="submit">Add contact</button>
      </form>
    )

  }
}

export default ContactForm;