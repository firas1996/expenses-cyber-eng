import React from "react";
import ExpensesContainer from "./Components/ExpensesContainer";
import Epi from "./Epi";
import AddExpense from "./Components/AddExpense";
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
  // 5f7ra4x
  return (
    <Epi>
      <AddExpense />
      <ExpensesContainer expensesData={expensesData} />
    </Epi>
  );
}

export default App;
