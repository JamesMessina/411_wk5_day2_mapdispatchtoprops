import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Navigation />
        <Router />
      </HashRouter>
    </Provider>
  );
}

export default App;
