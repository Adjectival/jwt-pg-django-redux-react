import React, { Component } from 'react';
import react_logo from './react-logo.svg';
import redux_logo from './redux-logo.svg';
import django_logo from './django-logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logos">
            <img src={react_logo} className="App-logo" alt="logo" />
            <img src={redux_logo} className="App-logo" alt="logo" />
            <img src={django_logo} className="App-logo" alt="logo" />
          </div>
          <h1 className="App-title">React Redux Django w/ JWT</h1>
        </header>
        <p className="App-intro">
          Based on <a href="https://medium.com/@viewflow/full-stack-django-quick-start-with-jwt-auth-and-react-redux-part-ii-be9cf6942957">this example</a>.
        </p>
      </div>
    );
  }
}

export default App;
