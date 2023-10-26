import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Aboutt } from './pages/Aboutt';
import { AdminPanel } from './pages/AdminPanel';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Pricing } from './pages/Pricing';

function App() { 

	
	
return (
	<>
	<Navbar />
	<div className="container">
		<Routes>
			<Route path='/' element = {<Home/>} />
			<Route path='/about' element = {<Aboutt/>} />
			<Route path='/pricing' element = {<Pricing/>} />
			<Route path='/login' element={<Login />}/>
			<Route path='/adminpanel' element={<AdminPanel />}/>
		</Routes>
	</div>
	</>
);
} ;

export default App; 
