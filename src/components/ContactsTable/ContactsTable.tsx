import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeContactAction, State } from '../../store';
import './ContactsTable.scss';

export const ContactsTable: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: State) => state.contacts);

  const removeContact = (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const accept = confirm('Вы действительно хотите удалить контакт?');

    if (accept) {
      dispatch(removeContactAction(id));
    }
  };

  return (
    <ul className="contact__list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact__item">
          {contact.name}
          <div className="contact__buttons">
            <Link to={`/${contact.id}`} className="contact__link">
              Contact info
            </Link>
            <button
              className="contact__delete"
              type="button"
              onClick={() => removeContact(contact.id)}
            >
              Delete contact
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
