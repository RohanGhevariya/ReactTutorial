import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expense.js");
    setfilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
