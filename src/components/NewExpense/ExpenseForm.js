import React, { useState } from "react";

import "./ExpenseForm.css";
export default function ExpenseForm(props) {
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   }); //single state usage

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formVisibility, setFormVisibility] = useState(false);

  const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value}
    //     }); // single state usage

    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    setFormVisibility(false);
  }
  const addExpenseHandler = () => {
    setFormVisibility(true);
  }


  let formContent = <button onClick={addExpenseHandler}>Add New Expense</button>
  if (formVisibility) {
    formContent = <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="text"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={cancelHandler}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  }
  return formContent;
}
