import React from 'react';
import { useSelector } from 'react-redux'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
const SimpleCharts = () => {
    const sipData = useSelector(state => state.values.sipYearData);
    console.log(sipData)
    console.log("Est returns",parseInt(sipData?.totalAmount) + parseInt(sipData?.invested_amount))
    const chartData = [
        {
          name: "Invested Amount",
          value: parseFloat(sipData?.invested_amount)
        },
        {
          name: "Gained",
          value: parseFloat(sipData?.totalAmount)
        }
      ];
    
      // Colors for the pie chart slices
      const COLORS = ['#0088FE', '#00C49F'];
  return (
    <div>
          <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={true}
        data={chartData}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        animationDuration={800} 
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </div>
  )
}

export default SimpleCharts