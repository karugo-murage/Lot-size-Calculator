import React from 'react';
import ReactDOM from 'react-dom/client';
import Instruction from './components/instruction';
import Header from './components/Header';
import Main from './components/Main';
import "./assets/style.css"
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Instruction/>
    <Main/>
    <Footer/>
  </React.StrictMode>
  
);

