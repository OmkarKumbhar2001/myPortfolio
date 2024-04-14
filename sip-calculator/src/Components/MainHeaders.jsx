import React from 'react'
import { Outlet } from 'react-router-dom';
import CustomNav from './CustomNav';
import "./css/CustomNav.css"
export const MainHeader = () => {
  return (
  <div className='mainAllDiv'>
    <CustomNav />
    <div> 
          <Outlet />
    </div>
  </div>
  )
}