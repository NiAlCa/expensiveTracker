


import { VictoryLabel, VictoryPie } from "victory";
import { useGlobalState } from "../../../context/GlobalState";
import { BsPieChartFill } from "react-icons/bs";



export const ExpenseChart = () => {

    const {transactions } = useGlobalState();

    const totalIncomes = transactions 
    .filter((transaction) => transaction.Amount > 0)
    .reduce((acc, transaction) => (acc += transaction.Amount), 0);

    const totalExpenses = transactions
    .filter((transaction) => transaction.Amount < 0)
    .reduce((acc, transaction) => (acc -= transaction.Amount), 0);

    const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
    const incomesPercentage = 100 - (expensesPercentage);
  
    if (totalIncomes === 0 && totalExpenses === 0) {
      return (
        <div >
          <div >
            <BsPieChartFill />
            <h1 >No data yet</h1>
          </div>
        </div>
      );
    }

  return (
    <div >
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: expensesPercentage , label: "Expenses"},
        { x: "Incomes", y: incomesPercentage, label: "Incomes" },
      ]}
      animate={{
        duration: 2000,
      }}
      height={300}
      labels={({ datum }) => datum.y}
      labelComponent={
        <VictoryLabel
          angle={45}
          style={{
            fill: "black",
          }}
        />
      }
    />
  </div>
  )
}
