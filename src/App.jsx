
import { Balance } from './components/Balance/Balance'
import { Header } from './components/Header/Header'
import { ExpenseChart } from './components/Trasactions/ExpenseChart/ExpenseChart'
import { IncomeExpenses } from './components/Trasactions/IncomeExpenses/IncomeExpenses'
import { TransactionForm } from './components/Trasactions/TransactionForm/TransactionForm'
import { TransactionList } from './components/Trasactions/TransactionsList/TransactionList'
import { GlobalProvider } from './context/GlobalState'
import styles from './index.module.scss'


function App() {


  return (
    <GlobalProvider>
      <div className={styles.container}>
      <div className={styles.subContainer}>
      <Header/>
      <IncomeExpenses/>
      <Balance/>
      <TransactionForm/>
      </div>
      <div >
      <TransactionList/>
      <ExpenseChart/>
      </div>
      </div>
    </GlobalProvider>
  )
}

export default App
