import React from 'react'
import './add-form.css'
import { useState } from 'react'
import { categories } from '../../constants/add-expenses'
import { useDispatch } from 'react-redux'
import { addExpense } from '../../redux/actions/expenses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';

export default function AddForm () {
  const cat = categories
  const [arrow, setArrow] = useState('down-arrow.png')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [modalOpen, setModal]= useState(false);

  const dispatch= useDispatch();

  const inputTitle = e => {
    setTitle(e.target.value)
  }
  const inputAmount = e => {
    setAmount(e.target.value)
  }

  const handleCategory = (value) => {
    setCategory(value)
    // setIcon()
    setCategoryOpen(false)
    setArrow('down-arrow.png')
  }
  const openCategoryDropDown = () => {
    setCategoryOpen(categoryOpen? false: true)
    setArrow(categoryOpen? 'down-arrow.png': 'right-arrow.png')
  }
  
  const notify = () => toast("Please enter valid data!");

  const submitForm =() =>{
    if((title==='' || Number.isInteger(Number(title))) || (amount==='' || (!Number.isInteger(Number(amount)) || Number(amount)<0)) || category===''){
        console.log("In if of submit button")
        notify();
        return;
    }
    const data={
            title,
            amount,
            category,
            createAt: new Date(),
        }
    // console.log("data is "+ data);
    console.log(data);
    dispatch(addExpense(data));
    setModal(true);
  }
  return (
    <>
      <div className='container-wrapper'>
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
        <SuccessModal  modalOpen= {modalOpen} setModal={setModal}/>
        <div className='add-form'>
          <div className='form-text'>
            <label htmlFor=''>Title</label>
            <input
              type='text  '
              value={title}
              className='form-item'
              onChange={e => inputTitle(e)}
            />
          </div>
          <div className='form-text'>
            <label htmlFor=''>Amount</label>
            <input
              type='text'
              value={amount}
              className='form-item'
              onChange={e => inputAmount(e)}
            />
          </div>
          <div className='category-container'>
            <div className='category' onClick={() => openCategoryDropDown()}>
              {category ? category.title : 'Category'}
              <img src={arrow} alt='' />
            </div>
            <ul className='category-items'>
              {categoryOpen &&
                cat.map(element => {
                  //  { console.log(element.title, element.icon)}
                  return (
                    <li
                      className='category-item'
                      key= {element.title}
                      onClick={() => handleCategory(element)}
                    >
                      {element.title}
                      <img src={element.icon} alt='' />
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
        <div className='form-submit-btn'  onClick={()=>submitForm()}>
          Add
          <img src='submit.png' alt='' />
        </div>
      </div>
    </>
  )
}
