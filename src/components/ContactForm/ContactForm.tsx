import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContactAction, State } from '../../store';
import './ContactForm.scss';

export const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: State) => state.contacts);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const addContact = () => {
    const newContact: any = {
      id: contacts.length + 1,
      name,
      email,
      phone,
    };

    if (newContact.name.trim() === '') {
      alert('Invalid Name');
    } else {
      dispatch(createContactAction(newContact));
    }
  };

  const createContact = (event: React.FormEvent) => {
    event.preventDefault();
    addContact();
  };

  return (
    <form className="contact__form" onSubmit={createContact}>
      <input
        className="contact__input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <input
        className="contact__input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        className="contact__input"
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
      />
      <button className="contact__button" type="submit">Create contact</button>
    </form>
  );
};
