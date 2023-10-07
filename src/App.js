import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages';
import About from './pages/about';
import AnnualReport from './pages/annual';
import Blogs from './pages/blogs';
import Events from './pages/events';
import SignUp from './pages/signup';
import Teams from './pages/team';


  function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/events' exact component={Events} />
        <Route path='/annual' exact component={AnnualReport} />
        <Route path='/team' exact component={Teams} />
        <Route path='/blogs' exact component={Blogs} />
        <Route path='/sign-up' exact component={SignUp} />
      </Routes>
    </Router>

  );
}

export default App;
