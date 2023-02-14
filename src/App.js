// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";
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
      <Expenses items={expense} />
    </div>
  );
}

export default App;
