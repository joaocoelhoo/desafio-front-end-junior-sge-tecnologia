import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CatsList from "./pages/CatsList";
import Provider from "./context/Provider";
import Header from './components/Header';
import Form from './pages/Form';

function App() {
  return (
    <Provider>
      <Switch>
        <Route
          exact
          path="/"
          component={ Header } />
        <Route
          exact
          path="/cats"
          component={ CatsList } />
        <Route
          exact
          path="/form"
          component={ Form } />
      </Switch>
    </Provider>
);
}

export default App;
