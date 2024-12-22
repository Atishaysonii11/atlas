import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header>
        <div className='container'>
            <div className='navbar-grid'>
                <div className='Logo'>
                    <NavLink to="/">
                        <h1>World Atlas</h1>
                    </NavLink> 
                </div>

                <nav>
                    <ul>
                        <l1><NavLink to="/">Home</NavLink></l1>
                        <l1><NavLink to="/about">About</NavLink></l1>
                        <l1><NavLink to="/contact">Contact</NavLink></l1>
                        <l1><NavLink to="/country">Country</NavLink></l1>                    
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    </>
  )
}

export default Header
