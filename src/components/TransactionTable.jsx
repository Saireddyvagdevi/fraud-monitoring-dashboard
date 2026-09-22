import { Link } from 'react-router-dom'

function TransactionTable({ transactions }) {
  return (
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
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
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
          ))
        ) : (
          <tr>
            <td colSpan="4">No transactions found.</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default TransactionTable