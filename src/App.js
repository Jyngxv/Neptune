import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './component/Header';
import Section01 from './component/Section01';
import Section02 from './component/Section02';
import Section03 from './component/Section03';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Footer />
    </div>
  );
}

export default App;
