import { useState } from "react"
import { useGlobalState } from "../../../context/GlobalState"
import styles from './TransactionForm.module.scss'

export const TransactionForm = () => {
  
  const {addTransaction } = useGlobalState()
  const [Description, setDescription] = useState()
  const [Amount, setAmount] = useState(0)


  const onSubmit = (e) => {

    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      Description,
      Amount: +Amount,
    });
    console.log(Description, Amount)

  }

  return (
 
      <form onSubmit={onSubmit} className={styles.container}>
        <input type="text" placeholder="Enter a Description" 
        onChange={(e) => setDescription(e.target.value)} className={styles.input}/>
        <input type="number" step="0.01" placeholder="Enter a Mount"
        onChange={(e) => setAmount(e.target.value)} 
        className={styles.input} />
        <button className={styles.inputButton}>
          Add Transaction
        </button>
      </form>

  
  )
}
