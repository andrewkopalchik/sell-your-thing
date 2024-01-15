import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Aboutt } from './pages/Aboutt';
import { AdminPanel } from './pages/AdminPanel';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Pricing } from './pages/Pricing';
import { ProductDetails } from './pages/product/slug.js';
import Userpage from './pages/Userpage';

function App() { 
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Aboutt />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/adminpanel' element={<AdminPanel />} />
          <Route path='/product/:slug' element={<ProductDetails />} />
          <Route path='/userpage' element={<Userpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
