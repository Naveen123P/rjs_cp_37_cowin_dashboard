// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'
import '../CowinDashboard/index.css'

const VaccinationByGender = props => {
  const {data} = props
  console.log(data)
  return (
    <div className="rechart-container">
      <h1 className="heading">Vaccination By Gender</h1>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="middle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
