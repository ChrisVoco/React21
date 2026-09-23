import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
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
            {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem key={expense.id} data={expense} />
                ))
            )}
        </Card>
    );
};

export default Expenses;
