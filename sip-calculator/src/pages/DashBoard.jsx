import React from 'react'
import GridLines from "react-gridlines";
import './css/dashboard.css'
const DashBoard = () => {
  return (
    <GridLines className="grid-area" cellWidth={100} strokeWidth={0.1} cellWidth2={0}>
    <div className='landingpage'>DashBoard</div>
    </GridLines>
  )
}

export default DashBoard;