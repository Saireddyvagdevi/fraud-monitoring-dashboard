function AlertList({ alerts }) {
  return (
    <ul>
      {alerts.map((alert) => (
        <li key={alert.id}>
          {alert.transactionId} → {alert.message}
        </li>
      ))}
    </ul>
  )
}

export default AlertList