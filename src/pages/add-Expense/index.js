import React from 'react'
import TopFold from '../../components/topFold'
import './add-Expense.css'
import AddForm from '../../components/add-form'
// import { Provider } from 'react-redux'

export default function AddExpense () {
  return (
    <>
      {/* This is AddExpense TopFold */}
      <div className='add-Expense'>
        <TopFold />
        {/* <Provider> */}
          <AddForm />
        {/* </Provider> */}
      </div>
    </>
  )
}
