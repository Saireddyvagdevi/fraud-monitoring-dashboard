import { useParams } from 'react-router-dom'
import transactions from '../data/transactions'

function TransactionDetails() {
  const { id } = useParams()

  const transaction = transactions.find(
    (transaction) => transaction.id === id
  )

  if (!transaction) {
    return <h1>Transaction not found</h1>
  }

 return (
  <div className="transaction-details">
    <h1>Transaction Details</h1>

    <div className="details-card">
      <p>
        <strong>Transaction ID:</strong> {transaction.id}
      </p>

      <p>
        <strong>Customer:</strong> {transaction.customer}
      </p>

      <p>
        <strong>Amount:</strong> {transaction.amount}
      </p>

      <p>
        <strong>Status:</strong>{' '}
        <span
          className={
            transaction.status === 'Suspicious'
              ? 'suspicious'
              : 'normal'
          }
        >
          {transaction.status}
        </span>
      </p>

      <p>
        <strong>Reason:</strong> {transaction.reason}
      </p>
    </div>
  </div>
)
}

export default TransactionDetails