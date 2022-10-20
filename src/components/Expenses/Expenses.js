import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [yearFilter, setyearFilter] = useState("2021");

  const filterExpenses = (year) => {
    setyearFilter(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterExpenses}
          currentState={yearFilter}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
