import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';

function App() { 

	
	
return (
	<>
	<Navbar />
	<div className="container">
		<Routes>
			<Route path='/' element = {<Home/>} />
			<Route path='/about' element = {<About/>} />
			<Route path='/pricing' element = {<Pricing/>} />
		</Routes>
	</div>
	</>
);
} ;

export default App; 
