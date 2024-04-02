import ExpenseItems from "../expense-items/ExpenseItems"

export const Expenses = (props) => {
    return (
        <div>
            {props.expenses.map((elem) => {
                return (
                    <ExpenseItems name={elem.title} price={elem.price} date={elem.date}/>
                )
            })}
        </div>
    )
}

