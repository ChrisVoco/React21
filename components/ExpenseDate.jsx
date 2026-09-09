import './ExpenseDate.css'

const ExpenseItem = (props) => {
    
    const day = props.date.toLocaleString('en-US', {day: '2-digit'})
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    const year = props.date.getFullYear()

    return(
        <div class="expense-date">
            <div class="expense-date__month">{month}</div>
            <div class="expense-date__day">{day}</div>
            <div class="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseItem