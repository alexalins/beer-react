import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Router from './Router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Router />
      </div>
    </ BrowserRouter>
  );
}

export default App;
