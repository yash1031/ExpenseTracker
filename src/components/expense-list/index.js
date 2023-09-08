import React from 'react'
import './expense-list.css'
import Card from './card'
import { useSelector } from 'react-redux'

export default function ExpenseList () {
  const expenses = useSelector(state => state.expenses)
  console.log(expenses, expenses.expenseList)
  const list= expenses.expenseList
  return (
    <>
      <div className='container'>
        {list.length ? list.map(item => <Card key={item} item={item} />) :
            <div className='EmptyList'>
                <img src="EmptyCart.png" alt="" />
                <label>Uh Oh! Your Expense List is empty</label>
            </div>

        }
      </div>
    </>
  )
}
