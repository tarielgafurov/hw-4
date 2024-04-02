import React from 'react'
import Input from '../UI/Input'
import "../expense-form/Expense-form.css"
import Button from '../UI/Button'

const ExpenseForm = (props) => {

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} >
      <label htmlFor="title">title</label>
      <Input placeholder="title..." type="text" id="title"/>

      <label htmlFor="price">price</label>
      <Input placeholder="price..." type="number" id="price"/>
      
      <label htmlFor="date">date</label>
      <Input placeholder="date..." type="date" id="date"/>

      <div className="container-form-buttons">
        <Button name="Добавить расход" />
        <Button onClick={props.closeForm} name="Отмена" />
      </div>
    </form>
  )
}

export default ExpenseForm
