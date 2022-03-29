import { useState } from 'react'
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions'

export function App() {
  const [newTransactionModalIsOpen, setNewTransactionModalIsOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setNewTransactionModalIsOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setNewTransactionModalIsOpen(false)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />

      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={newTransactionModalIsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
