import logo from './logo.svg';
import './App.css';
import 'animate.css';
import React, { useEffect } from 'react';
import ScrollMagic from 'scrollmagic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './component/Header';
import Section01 from './component/Section01';
import Section02 from './component/Section02';
import Section03 from './component/Section03';
import Section04 from './component/Section04';
import Section05 from './component/Section05';
import Section06 from './component/Section06';
import Section07 from './component/Section07';
import Section08 from './component/Section08';
import Footer from './component/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Section08 />
      <Footer />
    </div>
  );
}

export default App;
