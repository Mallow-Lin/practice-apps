import React, { useState } from "react";

const Payment = ({ firstname, payment }) => {

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [CVV, setCVV] = useState('');
  const [ZIPCODE, setZIPCODE] = useState('');
  const [YearError, setYearError] = useState('');
  const [MonthError, setMonthError] = useState('');
  const [ZIPError, setZIPError] = useState('');
  const [CardError, setCardError] = useState('');


  const handleClick = () => {
    if (cardNumber.length < 16) {
      setCardError('Please enter a valid Card Number')
    } else if (expYear < 2023) {
      setYearError('Please enter a valid Year')
    } else if (expMonth < 1 || expMonth > 12) {
      setMonthError('Please enter a valid Month')
    } else if (ZIPCODE < 10000) {
      setZIPError('Please enter a valid ZIP Code')
    } else {
      const info = {cardName, cardNumber, expMonth, expYear, CVV, ZIPCODE};
      payment(info);
    }
  }


  return (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Payment</h3></div>
      <h4>Dear ${firstname}, Enter your payment details</h4>
      <form onSubmit={(e) => {e.preventDefault(); handleClick()}}>
        <div className='label'>
          <input type='text' className='cardName' value={cardName} placeholder='Name on Card' required
                 onChange={(e) => setCardName(e.target.value)} /><h4 className='star'>*</h4>
        </div>
        <div className='label'>
          <input type='text' className='cardNumber' value={cardNumber} placeholder='Credit Card number' minLength={16} maxLength={16} pattern="[0-9]*" autoComplete="cc-number" required
                 onChange={(e) => {setCardError(''); setCardNumber(e.target.value)}} /><h4 className='star'>*</h4>
        </div>
        <h5 className='error'>{CardError}</h5>
        <div className='label'>
          <input type='number' className="expMonth" value={expMonth} placeholder='01' max={12} required
                 onChange={(e) => {setMonthError(''); setExpMonth(e.target.value)}}/><h4 className='star'>*</h4>
          <input type='number' className="expYear" value={expYear} placeholder='YYYY' max={9999} required
                 onChange={(e) => {setYearError(''); setExpYear(e.target.value)}} /><h4 className='star'>*</h4>
        </div>
        <h5 className='error'>{MonthError}</h5>
        <h5 className='error'>{YearError}</h5>
        <div className='label'>
          <input type='text' className="CVV" value={CVV} placeholder='CVV' max={999}
                 onChange={(e) => setCVV(e.target.value)} required/><h4 className='star'>*</h4>
          <input type='number' className="billingZIP" value={ZIPCODE} placeholder='Billing Zip code' max={99999} autoComplete="postal-code" pattern="^([0-9]{5})$" required
                 onChange={(e) => {setZIPError(''); setZIPCODE(e.target.value)}}/><h4 className='star'>*</h4>
        </div>
        <h5 className='error'>{ZIPError}</h5>
        <button>Continute</button>
      </form>
    </div>
  )
}

export default Payment;