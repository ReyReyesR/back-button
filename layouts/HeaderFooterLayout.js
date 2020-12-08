import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import Colorwash from '../components/Colorwash';
export default function Layout({ children }) {
  return (
    <>
      <Colorwash />
      <Header />
      <div id="main-view" className="app">
        {children}
      </div>
      <Footer />
    </>
  );
}
