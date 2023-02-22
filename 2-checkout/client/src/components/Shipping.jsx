import React, { useState } from 'react';

const Shipping = ({ shipping, firstname}) => {

  const [fullname, setFullname] = useState('');
  const [shippingLine1, setShippingLine1] = useState('');
  const [shippingLine2, setShippingLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [ZIPCode, setZIPCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleShipping = () => {
    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
    } else if (phone.length < 11) {
      setPhoneError('Please enter a valid Phone Number')
    } else {
      const info = {fullname, shippingLine1, shippingLine2, city, state, ZIPCode, email, phone};
      shipping(info);
    }
  }



  return (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Shipping</h3></div>
      <h4>Dear ${firstname}, Your Shipping Address</h4>
      <div>
      <div className='label'>
        <input type='text' className='fullname' value={fullname} placeholder='Full Name' required
               onChange={(e) => setFullname(e.target.value)}/><h4 className='star'>*</h4>
      </div>
      <div className='label'>
        <input type='text' className='shippingLine1' value={shippingLine1} placeholder='Street Address' required
               onChange={(e) => setShippingLine1(e.target.value)}/><h4 className='star'>*</h4>
      </div>
      <div className='label'>
        <input type='text' className='shippingLine2' value={shippingLine2} placeholder='Apt / Suite / Other (Optional)'
               onChange={(e) => setShippingLine2(e.target.value)}/>
      </div>
      <div className='label'>
        <input type='text' className='city' value={city} placeholder='City' required
               onChange={(e) => setCity(e.target.value)}/><h4 className='star'>*</h4>
      </div>
      <div className='label'>
        <input type='text'  className='state' value={state} placeholder='NY' maxLength={2} required
               onChange={(e) => setState(e.target.value)}/><h4 className='star'>*</h4>
        <input type='text' className='ZIPCode' value={ZIPCode} placeholder='ZIP Code' maxLength={5} pattern="^([0-9]{5})$" required
               onChange={(e) => setZIPCode(e.target.value)}/><h4 className='star'>*</h4>
      </div>
      <div className='label'>
        <input type='email' className='email' value={email} placeholder='Email'
               onChange={(e) => {setEmailError(''); setEmail(e.target.value)}}/><h4 className='star'>*</h4>
      </div>
      <h5 className='error'>{emailError}</h5>
      <div className='label'>
        <input type='tel'  className='phone' value={phone} placeholder='Phone Number' maxLength={11} pattern="[0-9]*" required
               onChange={(e) => {setPhoneError(''); setPhone(e.target.value)}}/><h4 className='star'>*</h4>
      </div>
      <h5 className='error'>{phoneError}</h5>
      <button onClick={handleShipping}>Continute</button>
      </div>
    </div>
  )
}

export default Shipping;