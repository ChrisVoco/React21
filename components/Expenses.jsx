import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <div class="expenses">
            {props.expenses.map((expense, index) => (
                <ExpenseItem
                    key={index}
                    data={expense}
                />
            ))}
        </div>
    );
};

export default Expenses;