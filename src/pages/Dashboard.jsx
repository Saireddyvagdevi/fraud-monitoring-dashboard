import { useState } from 'react'
import SummaryCard from '../components/SummaryCard'
import TransactionTable from '../components/TransactionTable'
import AlertList from '../components/AlertList'
import transactions from '../data/transactions'
import alerts from '../data/alerts'

function Dashboard() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [sortOrder, setSortOrder] = useState('none')
  const [currentPage, setCurrentPage] = useState(1)
  

  const filteredTransactions = transactions
    .filter((transaction) => {
      const matchesSearch =
        transaction.id.toLowerCase().includes(search.toLowerCase()) ||
        transaction.customer.toLowerCase().includes(search.toLowerCase())

      const matchesStatus =
        statusFilter === 'All' ||
        transaction.status === statusFilter

      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      const amountA = Number(
        a.amount.replace(/[₹,]/g, '')
      )

      const amountB = Number(
        b.amount.replace(/[₹,]/g, '')
      )

      if (sortOrder === 'low') {
        return amountA - amountB
      }

      if (sortOrder === 'high') {
        return amountB - amountA
      }

      return 0
    })

  const totalTransactions = transactions.length

  const suspiciousTransactions = transactions.filter(
    (transaction) => transaction.status === 'Suspicious'
  ).length

  const totalAlerts = alerts.length

  // Pagination
  const transactionsPerPage = 3

  const startIndex =
    (currentPage - 1) * transactionsPerPage

  const paginatedTransactions =
    filteredTransactions.slice(
      startIndex,
      startIndex + transactionsPerPage
    )

  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  )
  return (
    <div>
      {/* Summary Cards */}
      <section>
        <SummaryCard
          title="Total Transactions"
          value={totalTransactions}
        />

        <SummaryCard
          title="Suspicious"
          value={suspiciousTransactions}
        />

        <SummaryCard
          title="Alerts"
          value={totalAlerts}
        />
      </section>

      {/* Transaction Monitoring */}
      <section>
        <h2>Transaction Monitoring</h2>

        {/* Search */}
        <label htmlFor="transaction-search">
  Search transactions
</label>
        <input
          type="text"
          placeholder="Search transaction..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            setCurrentPage(1)
          }}
        />

        {/* Status Filter */}
        <label htmlFor="status-filter">
  Status
</label>

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value)
            setCurrentPage(1)
          }}
        >
          <option value="All">All</option>
          <option value="Normal">Normal</option>
          <option value="Suspicious">Suspicious</option>
        </select>

        {/* Amount Sorting */}
        <label htmlFor="amount-sort">
  Sort
</label>

        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value)
            setCurrentPage(1)
          }}
        >
          <option value="none">
            Sort by Amount
          </option>

          <option value="low">
            Amount: Low to High
          </option>

          <option value="high">
            Amount: High to Low
          </option>
        </select>

        {/* Clear Filters */}
        <button
          onClick={() => {
            setSearch('')
            setStatusFilter('All')
            setSortOrder('none')
            setCurrentPage(1)
          }}
        >
          Clear Filters
        </button>

        {/* Transaction Table */}
        <TransactionTable
          transactions={paginatedTransactions}
        />

        {/* Pagination */}
        <div className="pagination">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    Previous
  </button>

  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      className={
        currentPage === index + 1 ? 'active-page' : ''
      }
    >
      {index + 1}
    </button>
  ))}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    Next
  </button>
</div>
      </section>

      {/* Suspicious Transactions */}
      <section>
        <h2>Suspicious Transactions</h2>

        <AlertList alerts={alerts} />
      </section>
    </div>
  )
}

export default Dashboard