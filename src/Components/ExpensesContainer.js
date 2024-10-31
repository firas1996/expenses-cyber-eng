import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesContainer.css";

const ExpensesContainer = ({ expensesData }) => {
  return (
    <div className="expensesContainer">
      {expensesData.map((el) => {
        return <ExpenseItem title={el.title} date={el.date} price={el.price} />;
      })}
    </div>
  );
};

export default ExpensesContainer;
