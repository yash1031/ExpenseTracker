import React, { useState } from 'react'
import './topFold.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { filterSearch } from '../../redux/actions/expenses';


export default function TopFold () {

  const dispatch= useDispatch();
  const [query, setQuery] = useState('')
  const handleQuery = e => {
    setQuery(e.target.value)
    dispatch(filterSearch(e.target.value));
  }
  return (
    <>
      <div className='top-fold'>
        {window.location.pathname === '/' ? (
          <div className='home-topFold'>
            <div className='searchBar'>
              <i className='fi fi-rr-search'></i>
              <input
                type='text'
                value={query}
                placeholder='Search for the expenses'
                onChange={e => handleQuery(e)}
              />
              {/* <input type="color" /> */}
            </div>
            <Link to='/add-Expense'>
              <div className='add-button'>
                <i className='fi fi-rr-add'></i>
                <label>Add</label>
              </div>
            </Link>
          </div>
        ) : (
          <div className='add-topFold'>
            <Link to='/'>
              <div className='add-topFold-btn'>
                <i className='fi fi-ss-angle-small-left'></i>
                <label htmlFor=''>Back</label>
              </div>
            </Link>
            <Link to='/'>
              <div className='add-topFold-btn'>
                <i className='fi fi-rr-cross-circle'></i>
                <label htmlFor=''>Cancel</label>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
