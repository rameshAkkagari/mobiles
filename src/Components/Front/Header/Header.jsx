import React from 'react'
import { BiSolidCart } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import './Header.css';
function Header({cartItems}) {
  return (
    <header className='header'>
        <div>
            <h1>
                <NavLink to="/" className='logo'>
                    Eletronics Shop
                </NavLink>
            </h1>
        </div>
        <div className='header-links'>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to='/Singup'>Singup</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to='/Cart' className='cart'>
                        <BiSolidCart size={30}/>
                        <span className='cart-length'>
                            {cartItems.length >=0 ? "": (<h3>{cartItems.length}</h3>)}
                            {/* {cartItems.length === 0 ? ("" ): (cartItems,length)}  */}
                        </span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header