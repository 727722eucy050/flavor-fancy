// OrderConfirmation.js
import React from 'react';
import './OrderConfirmation.css'; // Create a CSS file for styling
import Taskbar from './Taskbar';

const OrderConfirmation = () => {
  return (
    <div>
    <Taskbar/>
    <div className="confirmation-container">
      <h2>Order Successful</h2>
      <p>Your order was successful!</p>
      <p>Thank you for your purchase. Your food will be delivered as per the provided details.</p>
    </div>
    </div>
  );
};

export default OrderConfirmation;
