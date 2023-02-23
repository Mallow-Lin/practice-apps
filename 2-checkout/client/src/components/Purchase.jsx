import React, { useEffect } from "react";

const Purchase = ({ firstname, purchase, purchaseInfo }) => {

  useEffect(() => {
    purchase();
  }, []);

  return (
    <div>
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Purchase</h3></div>
      <h4>Dear {firstname}, please review your order informations</h4>
      <div>
        <h3>Order Information</h3>
        <h4>Sent To:</h4>
        <div>
             <ul>{purchaseInfo.fullName}</ul>
             <ul>{purchaseInfo.shippingLine1} {purchaseInfo.shippingLine2}</ul>
             <ul>{purchaseInfo.city} {purchaseInfo.shippingState} {purchaseInfo.shippingZipCode}</ul>
             <ul>{purchaseInfo.email}</ul>
             <ul>{purchaseInfo.phoneNumber}</ul>
        </div>
      </div>
      <div>
        <h3>Payment Information</h3>
        <h4>Credit Card</h4>
        <ul>XXXX XXXX XXXX {purchaseInfo.creditCard}</ul>
        <ul>{purchaseInfo.cardName}</ul>
        <ul>Billing Zip Code {purchaseInfo.billingZipCode}</ul>
      </div>
      <h3>items#######</h3>
      <form>
        <button >Purchase</button>
      </form>
    </div>
  )
}

export default Purchase;