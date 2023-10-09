import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export const Navbar = () => {
	const path = window.location.pathname
  return (
	<nav className='nav'>
		<Link to='/' className ='site-title'>
			Sale your thing
		</Link>
		<ul>
			<li className='active'>			
				<Link to='/pricing'>Pricing page</Link>
			</li>
			
			<li>
				<Link to='/about'>About page</Link>
			</li>
		</ul>
	</nav>
  )
}
