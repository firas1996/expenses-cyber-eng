import { useState } from "react";
import "./AddExpense.css";
const AddExpense = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    console.log({ title, price, date });
    setDate("");
    setPrice("");
    setTitle("");
  };
  return (
    <div className="new-expense">
      <form onSubmit={handelSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              required
              placeholder="Title"
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              required
              placeholder="Price"
              type="number"
              min="0"
              step="0.01"
              onChange={priceChangeHandler}
              value={price}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
