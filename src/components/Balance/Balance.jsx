
import {  useGlobalState } from "../../context/GlobalState"
import styles from './Balance.module.scss'


export const Balance = () => {

  const { transactions } = useGlobalState( );

  const amounts = transactions.map(transaction => transaction.Amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  
  return (

    <div className={styles.container}>
       <h1>
        Balance
      </h1>
      {JSON.stringify( total, null, 2 )}
     

    </div>
  
    )
}
