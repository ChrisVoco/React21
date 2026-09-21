import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const amount = props.data.amount ?? props.data.price ?? 0;
    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.data.date} />

            <div className="expense-item__description">
                <h2>{props.data.title}</h2>
                <div className="expense-item__price">{formattedAmount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
