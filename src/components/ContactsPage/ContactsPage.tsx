import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsTable } from '../ContactsTable/ContactsTable';
import './ContactsPage.scss';

export const PeoplePage = () => {
  const contacts = useSelector((state: State) => state.contacts);

  return (
    <div className="contacts__page">
      <h1 className="contacts__title">
        Contacts Page
      </h1>
      <div className="contacts__sector">
        {contacts.length > 0 && <ContactsTable />}
        <ContactForm />
      </div>
    </div>
  );
};
