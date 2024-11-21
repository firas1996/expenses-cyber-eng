import { useState } from "react";
import "./AddExpense.css";
const AddExpense = ({ getData }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [newExpenseData, setNewExpenseData] = useState({
    title: "",
    price: "",
    date: "",
  });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setNewExpenseData({ ...newExpenseData, title: event.target.value });
    setNewExpenseData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const inputsChangeHandler = ({ target }) => {
    const { name, value } = target;
    setNewExpenseData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    getData(newExpenseData);
    setNewExpenseData({
      title: "",
      price: "",
      date: "",
    });
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
              onChange={inputsChangeHandler}
              value={newExpenseData.title}
              name="title"
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
              onChange={inputsChangeHandler}
              value={newExpenseData.price}
              name="price"
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              required
              type="date"
              min="2022-01-01"
              max="2026-12-31"
              onChange={inputsChangeHandler}
              value={newExpenseData.date}
              name="date"
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
