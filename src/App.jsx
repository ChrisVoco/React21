import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";

const initialExpenses = [
    {
        id: "e1",
        date: new Date(2024, 10, 12),
        title: "New Book",
        amount: 30.99,
    },
    {
        id: "e2",
        date: new Date(2024, 10, 12),
        title: "New Jeans",
        amount: 99.99,
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

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
