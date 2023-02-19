import React from "react";

const Payment = ({ changePage }) => {

  const handleClick = () => {
    changePage('Purchase')
  }
  return (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Payment</h3></div>
      <button onClick={handleClick}>Continute</button>
    </div>
  )
}

export default Payment;