import { useGlobalState } from "../../../context/GlobalState"
import styles from "./TransactionList.module.scss"


export const TransactionList = () => {

    const {transactions, deleteTransaction} = useGlobalState()

  return (
    <div className={styles.container}>
      <h3>Expense history</h3>
      {  transactions.map(transaction => (
          <div key={transaction.id} className={styles.containerSecondary}>
              <p>{transaction.Description}</p>
              <div className={styles.containerTercyary}>
              <span>${transaction.Amount}</span>
              <button onClick={() => {
                deleteTransaction(transaction.id)
              }}>
                Delete
              </button>
              </div>
          </div>
        ))}
        
    </div>
  )
}
