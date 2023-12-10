import { useGlobalState } from "../../../context/GlobalState";
import styles from './IncomeExpenses.module.scss'

export const IncomeExpenses = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.Amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc -= item), 0);

  return (
    <>
      <div className={styles.container}>
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div className={styles.container}>
        <h4>Expense</h4>
        <p>${expense}</p>
      </div>
    </>
  );
};
