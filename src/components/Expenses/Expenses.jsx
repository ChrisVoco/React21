import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log('Expenses.js: aasta muutus ->', selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseItem data={props.expenses[0]} />
            <ExpenseItem data={props.expenses[1]} />
        </Card>
    );
};

export default Expenses;
