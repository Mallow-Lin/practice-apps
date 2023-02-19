import React from "react";

const Purchase = ({ changePage }) => {

  const handleClick = () => {
    changePage('')
  }
  return (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Purchase</h3></div>
      <button onClick={handleClick}>Purchase</button>
    </div>
  )
}

export default Purchase;