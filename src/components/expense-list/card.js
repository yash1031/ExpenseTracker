import React from 'react'
import './card.css'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../../redux/actions/expenses'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';

export default function Card({item}) {
  const dispatch= useDispatch(); 

  const notify = () => toast.success("Item Deleted Successfully!");

  const handleDelete= () =>{
    dispatch(deleteExpense(item));
    notify();
  }

  const time= moment(item.createAt).fromNow();

  return (
    <>
      <ToastContainer
            position="bottom-left"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
      <div className='expenseList' style={{'borderRight':`4px solid rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`}}>
          <div className='logo-title-time item'>
            <img src={item.category.icon} alt='Icon NA' className='item-logo item1'/>
            <div className='item-title-time item1'>
              <div className='item-title'>{item.title}</div>
              <div className='item-time'>{time}</div>
            </div>
          </div>
          <div className='delete-cost item'>
            <i className='fi fi-bs-trash delete-icon item2' onClick={handleDelete}></i>
            <div className='item-cost item2'>&#8377; {item.amount}</div>
          </div>
        </div>
    </>
  )
}
