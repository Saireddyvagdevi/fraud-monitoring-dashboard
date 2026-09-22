import { Link } from 'react-router-dom'
import alerts from '../data/alerts'

function Alerts() {
  return (
    <div className="alerts-page">
      <h1>Fraud Alerts</h1>
      <p>Monitor suspicious transaction alerts.</p>

      <table>
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Transaction ID</th>
            <th>Reason</th>
            <th>Severity</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>
  <Link to={`/transactions/${alert.transactionId}`}>
    {alert.transactionId}
  </Link>
</td>
              <td>{alert.message}</td>
              <td
                className={
                  alert.severity === 'High'
                    ? 'suspicious'
                    : 'normal'
                }
              >
                {alert.severity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Alerts