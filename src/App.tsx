import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.scss';
import { ContactInfo } from './components/ContactInfo/ContactInfo';
import { PeoplePage } from './components/ContactsPage/ContactsPage';

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <PeoplePage />
        </Route>
        <Route path="/:id" component={ContactInfo} />
      </Switch>
    </>
  );
};

export default App;
