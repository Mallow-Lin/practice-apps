import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Register from "./components/Register";
import Shipping from "./components/Shipping";
import Payment from './components/Payment'
import Purchase from './components/Purchase'

const App = () => {
  const [page, setPage] = useState('');
  console.log(page)

  const changePage = (input) => {
    setPage(input);
  }


  return  (
    page === 'Register' ? <Register changePage={changePage} />
    : page === 'Shipping' ? <Shipping changePage={changePage} />
    : page === 'Payment' ? <Payment changePage={changePage} />
    : page === 'Purchase' ? <Purchase changePage={changePage} />
    : (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Home Page</h3></div>
      <div>
        <label htmlFor='checkout'>Proceed to Checkout: </label>
        <button id='checkout' onClick={() => setPage('Register')}>Checkout</button>
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