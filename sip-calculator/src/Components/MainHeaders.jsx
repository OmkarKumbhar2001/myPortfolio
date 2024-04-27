import React from 'react'
import { Outlet } from 'react-router-dom';
import CustomNav from './CustomNav';
import "./css/CustomNav.css"
import Footer from './Footer';
export const MainHeader = () => {
  return (
  <div className='mainAllDiv'>
    <CustomNav />
    <div> 
          <Outlet />
    </div>
    <Footer />
  </div>
  )
}