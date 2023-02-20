import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from './components/Payment.jsx'
import Purchase from './components/Purchase.jsx'
import axios from 'axios';

const App = () => {
  const [path, setPath] = useState('');

  const register = (user) => {
    axios({
      method: 'POST',
      url: '/register',
      params: user
    })
    .then(() => {
      setPath('/shipping')
    })
    .catch(() => {
      alert('This email address is already in use, please try again!')
    })
  }


  return  (
    path === '/register' ? <Register register={register}/>
    : path === '/shipping' ? <Shipping  />
    : path === '/payment' ? <Payment  />
    : path === '/purchase' ? <Purchase />
    : (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Home Page</h3></div>
      <div>
        <label htmlFor='checkout'>Proceed to Checkout: </label>
        <button id='checkout' onClick={() => setPath('/register')}>Checkout</button>
      </div>
    </div>
    )
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

{/* <p>
<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
</p> */}

// page === 'Register' ? <Register register={register}/> : (
//   <div>
//     <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Home Page</h3></div>
//     <div>
//       <label htmlFor='checkout'>Proceed to Checkout: </label>
//       <button id='checkout' page={page} onClick={() => setPage('Register')}>Checkout</button>
//     </div>
//   </div>
//   )