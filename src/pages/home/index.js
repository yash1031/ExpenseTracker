import React from 'react'
import './home.css'
import TopFold from '../../components/topFold'
import ExpenseList from '../../components/expense-list'

export default function Home() {
  return (
    <div>
      <div className="home">
        <TopFold/>
        <ExpenseList/>
      </div>
    </div>
  )
}
