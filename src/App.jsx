import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
import Alerts from './pages/Alerts'
import Reports from './pages/Reports'
import TransactionDetails from './pages/TransactionDetails'
function App() {
  return (
    <div>
     <Navbar />
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/transactions"
          element={<Transactions />}
        />
        <Route
  path="/transactions/:id"
  element={<TransactionDetails />}
/>
        <Route
          path="/alerts"
          element={<Alerts />}
        />

        <Route
          path="/reports"
          element={<Reports />}
        />

        <Route
          path="*"
          element={<Dashboard />}
        />
      </Routes>
    </div>
  )
}

export default App