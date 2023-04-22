import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>
          Stevie Miller
        </h1>
        <div className="header-nav">
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header