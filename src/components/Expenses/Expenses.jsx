import { useState } from 'react';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    console.log("Expenses.jsx: valitud aasta ->", filteredYear);
    console.log("Expenses.jsx: filtreeritud kulud ->", filteredExpenses);

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
