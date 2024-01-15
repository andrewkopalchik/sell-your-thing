import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { FaShoppingCart } from "react-icons/fa"
import { useState } from 'react'

export const Navbar = () => {
	let [cartOpen, setCartOpen] = useState(false)
  return (
	<nav className='nav'>
		<Link to='/' className ='site-title'>
			Sale your thing
		</Link>
		<ul>
		<FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
		{cartOpen && (
			<div className='shop-cart'>

			</div>
		)}
			<li className='active'>			
				<Link to='/pricing'>Pricing page</Link>
			</li>
			
			<li>
				<Link to='/about'>About page</Link>
			</li>
			<li>
				<Link to='/userpage'>User page</Link>
			</li>
			<li>
				<Link to='/login'>Login page</Link>
			</li>
		</ul>
	</nav>
  )
}
