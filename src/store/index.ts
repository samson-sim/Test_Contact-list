import { createStore } from 'redux';
import { contactsApi } from '../api/api';

export type State = {
  contacts: any[],
};

const CREATE_CONTACT = 'CREATE_CONTACT';
const REMOVE_CONTACT = 'REMOVE_CONTACT';
const ADD_FIELD = 'ADD_FIELD';

const defaultState: State = {
  contacts: [...contactsApi],
};

const reducer = (state = defaultState, action: any): State => {
  switch (action.type) {
    case CREATE_CONTACT:
      return { ...state, contacts: [...state.contacts, action.value] };

    case REMOVE_CONTACT:
      return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.value) };

    case ADD_FIELD:
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          const { id, key, value } = action;

          if (contact.id === id) {
            return { ...contact, [key]: value };
          }

          return contact;
        }),
      };

    default:
      return { ...state };
  }
};

export const removeContactAction = (value: number) => ({ type: REMOVE_CONTACT, value });
export const createContactAction = (value: any) => ({ type: CREATE_CONTACT, value });
export const createFieldAction = (value: any) => ({ type: CREATE_CONTACT, value });

export const store = createStore(reducer);
