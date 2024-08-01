// Write your code here
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'
import '../CowinDashboard/index.css'

const VaccinationByAge = props => {
  const {data} = props
  return (
    <div className="rechart-container">
      <h1 className="heading">Vaccination by Age</h1>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={data}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#f54394" />
            <Cell name="45-60" fill="#5a8dee" />
            <Cell name="Above 60" fill="#2cc6c6" />
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

export default VaccinationByAge
