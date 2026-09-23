import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        date: new Date(2023, 4, 18),
        title: "Concert Tickets",
        amount: 75.0,
    },
    {
        id: "e2",
        date: new Date(2024, 10, 12),
        title: "New Book",
        amount: 30.99,
    },
    {
        id: "e3",
        date: new Date(2024, 10, 12),
        title: "New Jeans",
        amount: 99.99,
    },
    {
        id: "e4",
        date: new Date(2025, 7, 5),
        title: "Office Chair",
        amount: 149.5,
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
};

export default App;
