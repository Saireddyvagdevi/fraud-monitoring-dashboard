import transactions from '../data/transactions'
import alerts from '../data/alerts'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'

function Reports() {

  const totalTransactions = transactions.length

  const suspiciousTransactions = transactions.filter(
    (transaction) => transaction.status === 'Suspicious'
  ).length

  const normalTransactions = transactions.filter(
    (transaction) => transaction.status === 'Normal'
  ).length

  const totalAlerts = alerts.length

  const transactionData = [
    {
      name: 'Normal',
      value: normalTransactions
    },
    {
      name: 'Suspicious',
      value: suspiciousTransactions
    }
  ]

  const amountData = transactions.map((transaction) => ({
    id: transaction.id,
    amount: Number(
      transaction.amount.replace(/[₹,]/g, '')
    )
  }))

  return (
    <div className="reports-page">
      <h1>Fraud Reports</h1>

      <p>
        Overview of transaction monitoring activity.
      </p>

      <div className="report-cards">
        <div className="report-card">
          <h2>Total Transactions</h2>
          <p>{totalTransactions}</p>
        </div>

        <div className="report-card">
          <h2>Suspicious Transactions</h2>
          <p>{suspiciousTransactions}</p>
        </div>

        <div className="report-card">
          <h2>Normal Transactions</h2>
          <p>{normalTransactions}</p>
        </div>

        <div className="report-card">
          <h2>Total Alerts</h2>
          <p>{totalAlerts}</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Transaction Status</h2>

        <PieChart width={400} height={300}>
          <Pie
            data={transactionData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            <Cell fill="#2e7d32" />
            <Cell fill="#d32f2f" />
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </div>

      <div className="chart-container">
        <h2>Transaction Amounts</h2>

        <BarChart
          width={600}
          height={350}
          data={amountData}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="id" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="amount"
            name="Amount"
          />
        </BarChart>
      </div>
    </div>
  )
}

export default Reports