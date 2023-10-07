import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationDetails} = props

  return (
    <div className="gender-container">
      <h1 className="gender-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationDetails}
            startAngle={0}
            endAngle={180}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
            nameKey="gender"
          >
            <Cell dataKey="male" name="Male" fill="#f54394" />
            <Cell dataKey="Female" name="Female" fill="#5a8dee" />
            <Cell dataKey="Others" name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            iconSize={10}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
