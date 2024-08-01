// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'
import '../CowinDashboard/index.css'

const VaccinationCoverage = props => {
  const {data} = props
  const updatedData = data.map(eachDay => ({
    vaccineDate: eachDay.vaccine_date,
    dose1: eachDay.dose_1,
    dose2: eachDay.dose_2,
  }))
  //   console.log(updatedData)
  const DataFormatted = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="rechart-container">
      <h1 className="heading">Vaccination Coverage</h1>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={updatedData} margin={{top: 5}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: 'gray', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatted}
            tick={{stroke: 'gray', strokeWidth: 0}}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="12%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="12%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
