import React from 'react';
import Shipping from './Shipping.js'

const Register = ({ changePage }) => {

  const handleClick = () => {
    changePage('Shipping');
  }
  return (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Register</h3></div>
      <div>
        <button onClick={handleClick}>Register</button>
      </div>
    </div>
  )
}

export default Register;