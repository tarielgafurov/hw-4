import React from 'react'
import "../expense-items/Expense-item.css"

const ExpenseItems = (props) => {


  return (
    <div className='container-expense-items' >
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <h1>{props.date.toLocaleDateString()}</h1>
    </div>
  )
}

export default ExpenseItems
