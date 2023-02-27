import React, { useState } from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from './components/Payment.jsx'
import Purchase from './components/Purchase.jsx'
import axios from 'axios';

const App = () => {
  const [path, setPath] = useState('');
  const [firstname, setFirstname] = useState('');
  const [purchaseInfo, setPurchaseInfo] = useState({});

  const register = (user) => {
    axios({
      method: 'POST',
      url: '/register',
      params: user
    })
    .then(() => {
      setPath('/shipping')
      setFirstname(user.firstname)
    })
    .catch(() => {
      alert('This email address is already in use, please try again!')
    })
  }

  const shipping = (info) => {
    axios({
      method: 'POST',
      url: '/shipping',
      params: info
    })
    .then(() => {
      setPath('/payment')
    })
    .catch(() => {
      console.log('err0r');
    })
  }

  const payment = (info) => {
    axios({
      method: 'POST',
      url: '/payment',
      params: info
    })
    .then(() => {
      setPath('/purchase')
    })
    .catch(() => {
      console.log('err0r');
    })
  }

  const purchase = () => {
    axios({
      method: 'GET',
      url: '/purchase'
    })
    .then((result) => {
      setPurchaseInfo(result.data);
    })
    .catch(() => {
      console.log('failed')
    })
  }

  const complete = () => {
    setPath('')
  }
  return  (
    path === '/register' ? <Register register={register}/>
    : path === '/shipping' ? <Shipping  shipping={shipping} firstname={firstname}/>
    : path === '/payment' ? <Payment payment={payment} firstname={firstname} />
    : path === '/purchase' ? <Purchase firstname={firstname} purchase={purchase} purchaseInfo={purchaseInfo} complete={complete} />
    : (
    <div className="page">
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Home Page</h3></div>
      <div className="home">
        <img src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2U7hReW6WUfLkoNfZbfekQ.png' className="checkoutImage" />
        <label htmlFor='checkout'>Proceed to Checkout: </label>
        <button className='button' onClick={() => setPath('/register')}>Checkout</button>
      </div>
    </div>
    )
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

{/* <p>
<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
</p> */}
