import React, { useState } from "react"; // import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 10.24,
    date: new Date(2021, 1, 26),
  },
  {
    id: "e2",
    title: "Groccery",
    amount: 10.24,
    date: new Date(2021, 1, 26),
  },
  {
    id: "e3",
    title: "learn React.js",
    amount: 10.24,
    date: new Date(2021, 1, 26),
  },
  {
    id: "e4",
    title: "Buy Iphone",
    amount: 10.24,
    date: new Date(2021, 1, 26),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
