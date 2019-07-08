import React from 'react';
import './App.css';
import ShowCard from './components/Card.jsx';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';

const loop = 12;

const App = () => {
  return  ( 
  <React.Fragment>
   <Header />
   <Navbar />
   </React.Fragment>
  )
}

export default App;