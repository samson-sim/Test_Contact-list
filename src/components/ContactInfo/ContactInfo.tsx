/* eslint-disable no-plusplus */
/* eslint-disable default-case */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { State } from '../../store';
import './ContactInfo.scss';

export const ContactInfo = ({ match }: any) => {
  const contactId = +match.params.id;
  const [prevValue, setPrevValue] = useState<string[]>(['', '']);
  const [newField, setNewField] = useState('');
  const [isFieldValid, setIsFieldValid] = useState(true);
  const [selectedKey, setSelectedKey] = useState('');
  const [query, setQuery] = useState('');
  const contacts = useSelector((state: State) => state.contacts);
  const [selectedContact, setSelectedContact] = useState(
    contacts.find(contact => contact.id === contactId),
  );

  const addField = () => {
    if (newField.includes(':')) {
      const field: any = {
        key: newField.split(':')[0],
        value: newField.split(':')[1],
      };

      if (field.key.trim().length > 0 && field.value.trim().length > 0) {
        setSelectedContact({ ...selectedContact, [field.key]: field.value });
        setNewField('');
      } else {
        setIsFieldValid(false);
      }
    } else {
      setIsFieldValid(false);
    }
  };

  const deleteField = (key: string) => {
    setPrevValue([key, selectedContact[key]]);
    // eslint-disable-next-line no-restricted-globals
    const accept = confirm('Вы точно хотите это сделать?');

    if (accept) {
      delete selectedContact[key];
      setSelectedContact({ ...selectedContact });
    }
  };

  const changeField = (key: string) => {
    setPrevValue([key, selectedContact[key]]);
    // eslint-disable-next-line no-restricted-globals
    const accept = confirm('Вы точно хотите это сделать?');

    if (accept) {
      setSelectedContact({ ...selectedContact, [key]: query });
    }

    setQuery('');
  };

  const addPrevValue = (prev: string[]) => {
    // eslint-disable-next-line no-restricted-globals
    const accept = confirm('Вы действительно хотите вернуться?');

    if (prev[0] !== '' && accept) {
      setSelectedContact({ ...selectedContact, [prev[0]]: prev[1] });
    }
  };

  const keys = Object.keys(selectedContact);

  return (
    <div>
      <h1>Contact Info</h1>
      <Link className="contact__link" to="/">Back to contacts list</Link>
      <button
        className="contact__back"
        type="button"
        onClick={() => addPrevValue(prevValue)}
      >
        Back
      </button>
      {selectedContact && (
        <div className="contact__info">
          {keys.map((key: any) => (
            <div key={key} className="contact__fields">
              <div className="contact__field">{key}</div>
              <input
                className="contact__info"
                value={selectedContact[key]}
                onClick={() => setSelectedKey(key)}
              />
              {key === selectedKey
              && (
                <>
                  <input
                    className="contact__info"
                    placeholder={`Введите новый ${key}`}
                    value={query}
                    onChange={({ target }) => {
                      setQuery(target.value);
                    }}
                  />
                  <button
                    className="contact__change"
                    disabled={query.length === 0}
                    type="button"
                    onClick={() => changeField(key)}
                  >
                    change
                  </button>
                  <button
                    className="contact__delete-key"
                    type="button"
                    onClick={() => deleteField(key)}
                  >
                    delete
                  </button>
                </>
              )}
            </div>
          ))}
          <div className="contact__create-field">
            <h2>Create new field</h2>
            <input
              className="contact__create"
              type="text"
              value={newField}
              placeholder="New Field"
              onChange={({ target }) => {
                setNewField(target.value);
                setIsFieldValid(true);
              }}
            />
            <button
              className="contact__create-button"
              type="button"
              onClick={addField}
            >
              Add new field
            </button>
            {!isFieldValid && <p style={{ color: 'red' }}>Введите поле в виде key:value</p>}
          </div>
        </div>
      )}
    </div>
  );
};
