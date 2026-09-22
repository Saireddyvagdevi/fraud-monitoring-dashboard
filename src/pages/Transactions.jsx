import { Link } from 'react-router-dom'
import transactions from '../data/transactions'

function Transactions() {
  return (
    <div className="transaction-details">
      <h1>Transactions</h1>

      <p>Monitor all transactions.</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <Link to={`/transactions/${transaction.id}`}>
                  {transaction.id}
                </Link>
              </td>

              <td>{transaction.customer}</td>

              <td>{transaction.amount}</td>

              <td
                className={
                  transaction.status === 'Suspicious'
                    ? 'suspicious'
                    : 'normal'
                }
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions