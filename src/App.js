import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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
  return (
    <div>
      <h1>Lets get started</h1>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
