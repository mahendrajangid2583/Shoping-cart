import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IconContext } from "react-icons";
import logo from './logo.png'

const Navbar = () => {
    const {cart} = useSelector((state)=>state);
  return (
    <nav className=' flex justify-between items-center h-[80px]'>
        <NavLink to="/"><img className=' w-[170px]' src={logo}></img></NavLink>
        <div className=' text-white flex gap-x-6 text-lg relative'>
           <NavLink to="/"> <span>Home</span></NavLink>
           <NavLink to="/cart">
              <div className=' relative'>
                <div className=' relative '><FaShoppingCart size={25}/></div>
                {
                  cart.length>0 &&
                  <div className=' animate-bounce bg-green-600 rounded-full w-5 h-5 flex justify-center items-center absolute -top-1 -right-2'>
                    <div className=' text-base'>{cart.length}</div>
                </div>
                }
              </div>
              
           </NavLink>
        </div>
    </nav>
  )
}

export default Navbar