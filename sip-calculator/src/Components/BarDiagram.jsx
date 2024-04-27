import React from 'react'
import { useSelector } from 'react-redux';
import "./css/Bardaigram.css"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const BarDiagram = () => {
const sipData = useSelector(state => state.values.sipYearData);
const data = sipData?.yearlyValues;
console.log(data)
  return (
    <div className='bardiagram-componet'>
    <h1>Details</h1>
    {/* <div> */}
         <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="invested_amount" stackId="a" fill="black" />
          <Bar dataKey="wealthGained" stackId="a" fill="#e0e0e0" />
        </BarChart>
      </ResponsiveContainer>
      {/* </div> */}
    </div>
  )
}

export default BarDiagram