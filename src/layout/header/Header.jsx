import React, { useState } from 'react'
import Button from '../../components/UI/Button'
import ExpenseForm from '../../components/expense-form/ExpenseForm'

const Header = () => {

    const [state , setState] = useState(false) // true

    const openFormhandler = () => {
        setState((prevState) => !prevState)
    }
    


  return (
    <header>
        <Button onClick={openFormhandler} name="open-form" />
        {state ? <ExpenseForm closeForm={openFormhandler} /> : ""}
        
    </header>
  )
}

export default Header
