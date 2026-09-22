import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h1>BNP Fraud Monitoring</h1>

      <div>
       <NavLink to="/dashboard">Dashboard</NavLink>
<NavLink to="/transactions">Transactions</NavLink>
<NavLink to="/alerts">Alerts</NavLink>
<NavLink to="/reports">Reports</NavLink>
      </div>
    </nav>
  )
}

export default Navbar