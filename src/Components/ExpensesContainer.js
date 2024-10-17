import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div>
      {expensesData.map((el) => {
        return <ExpenseItem title={el.title} date={el.date} price={el.price} />;
      })}
    </div>
  );
};

export default ExpensesContainer;
