import ExpenseItem from "./Components/ExpenseItem.jsx";
function App() {
  const expensesData = [
    {
      id: "e1",
      title: "Education",
      price: 4455,
      date: new Date(2024, 9, 17),
    },
    {
      id: "e2",
      title: "New Phone",
      price: 5432,
      date: new Date(2023, 6, 5),
    },
    {
      id: "e3",
      title: "Food",
      price: 1234,
      date: new Date(2024, 6, 1),
    },
    {
      id: "e4",
      title: "New PC",
      price: 3333,
      date: new Date(2022, 3, 11),
    },
  ];
  return (
    <>
      <ExpenseItem />
    </>
  );
}

export default App;
