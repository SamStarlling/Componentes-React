//App.js é componente pai da nossa aplicação

import React from 'react';
//import logo from './logo.svg';
import './App.css';

//importando os componentes
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
