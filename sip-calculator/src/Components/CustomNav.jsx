import React from 'react'
import "./css/CustomNav.css"
import { NavLink } from 'react-router-dom';
import logo from '../assets/siplogo.webp'
import { useSelector } from 'react-redux';
const CustomNav = () => {
  const isExperimental = useSelector((state)=>state.values?.experimental)
  return (
    <div className='customnav'>
        <NavLink to="/" className="logobar">
          <img className='logo' src={logo} alt='logo' />
          {isExperimental&&<p>Experimental</p>}
        </NavLink>
        <NavLink to="/options">Options</NavLink>
    </div>
  )
}

export default CustomNav;