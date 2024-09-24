import React from 'react';
import ReactDOM from 'react-dom/client';
import Instruction from './components/instruction';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Instruction/>
  </React.StrictMode>
);

