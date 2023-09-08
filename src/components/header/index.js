import React from 'react'
import './header.css'

export default function Header () {
  return (
    <>
      <div className='header-container'>
        <div className='header'>
          <div className='header-logo'>
            Xpensr <i className='fi fi-rr-credit-card'></i>
          </div>
          <div className='header-button'>
            <a href='https://github.com/' target='_blank' rel="noopener noreferrer">
            <i className="fi fi-brands-github"></i>Star        
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
