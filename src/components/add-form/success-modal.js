import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import './success-modal.css'
import { Link } from 'react-router-dom'

const customStyles = {
  content: {
    // height: '50%',
    // width: '50%',
    // display: 'block',
    // alignItems: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'aqua',
    borderRadius: '10px'
  }
}

export default function SuccessModal ({modalOpen, setModal}) {
  return (
    <Modal isOpen={modalOpen} style={customStyles} ariaHideApp={false}>
      <div className='modal-inner'>
        <label htmlFor=''>Expense Added Successfully</label>
        <img
          src='added-image.png'
          alt='Expense Added'
          className='added-image'
        />
      </div>
      <Link to='/'>
        <button className='take-home-button'>
          <img src='Home.png' alt='' />
          Home
        </button>
      </Link>
    </Modal>
  )
}
