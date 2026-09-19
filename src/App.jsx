import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <nav>
        <h1>BNP Fraud Monitoring</h1>

        <div>
          <a href="#">Dashboard</a>
          <a href="#">Transactions</a>
          <a href="#">Alerts</a>
          <a href="#">Reports</a>
        </div>
      </nav>

      <section>
        <div>
          <h2>Total Transactions</h2>
          <p>25,430</p>
        </div>

        <div>
          <h2>Suspicious</h2>
          <p>127</p>
        </div>

        <div>
          <h2>Alerts</h2>
          <p>42</p>
        </div>
      </section>
      <section>
  <h2>Transaction Monitoring</h2>

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
      <tr>
        <td>T001</td>
        <td>John</td>
        <td>₹50,000</td>
        <td>Normal</td>
      </tr>

      <tr>
        <td>T002</td>
        <td>Alex</td>
        <td>₹9,00,000</td>
        <td>Suspicious</td>
      </tr>

      <tr>
        <td>T003</td>
        <td>Sara</td>
        <td>₹20,000</td>
        <td>Normal</td>
      </tr>
    </tbody>
  </table>
</section>
<section>
  <h2>Suspicious Transactions</h2>

  <ul>
    <li>T002 → High amount</li>
    <li>T018 → Unusual location</li>
    <li>T023 → Multiple transactions</li>
  </ul>
</section>
    </div>
  )
}

export default App