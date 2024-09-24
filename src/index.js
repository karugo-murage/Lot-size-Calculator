import React from 'react';
import ReactDOM from 'react-dom/client';
import Instruction from './components/instruction';
import Header from './components/Header';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Instruction/>
  </React.StrictMode>
);

