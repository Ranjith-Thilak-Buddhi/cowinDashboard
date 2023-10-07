import './index.css'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationDetails} = props

  return (
    <div className="age-container">
      <h1 className="gender-heading">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccinationDetails}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="60%"
            dataKey="count"
            nameKey="age"
          >
            <Cell dataKey="18-44" name="18-44" fill="#2d87bb" />
            <Cell dataKey="F44-60" name="44-60" fill="#a3df9f" />
            <Cell dataKey="Above 60" name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
