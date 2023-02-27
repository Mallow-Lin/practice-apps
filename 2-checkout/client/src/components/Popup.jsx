import React from 'react';

const Popup = ({ popup, purchaseInfo, firstname, complete }) => {

  const handleClose = () => {
    complete();
  }

  return (popup) ? (
    <div className='outer-popup' onClick={handleClose}>
      <div className='inner-popup'>
        <div style={{marginTop: '25%'}}>
          <h3>{firstname}, Thank you for your order</h3>
          <h4>Order number is: {purchaseInfo.id}</h4>
          You will received an email confirmation shortly at {purchaseInfo.email}
        </div>
      </div>
    </div>
  ) : ''
};

export default Popup;