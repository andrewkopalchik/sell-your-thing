import React, { useEffect } from 'react';
import NavBar from './NavBar';

const Layout = () => {

  useEffect(() => {
    document.title = 'Sell your thing'; // Set the page title using the document object
  }, []);

  return (
    <div classname="layout">
      <header>
        <NavBar />
      </header>
      <main className='main-container'>
        EMPTY
      </main>
    </div>
  )
}

export default Layout;