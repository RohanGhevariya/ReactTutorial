// import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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
  const addExpenseHandler = (expense) => {
    console.log("inside App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
