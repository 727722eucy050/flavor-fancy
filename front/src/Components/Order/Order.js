import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Taskbar from './Taskbar';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use navigate to programmatically navigate
  const state = location.state || {};

  const [deliveryDetails, setDeliveryDetails] = React.useState({
    name: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({
      ...deliveryDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      vegNonVeg: state.selection,
      city: state.city,
      date: state.date,
      deliveryAt: deliveryDetails.address,
      time: state.time,
      breakfast: state.breakfast,
      lunch: state.lunch,
      dinner: state.dinner,
      price: state.price,
      contact: deliveryDetails.phone,
    };

    // Send orderData to the backend
    fetch('http://localhost:8080/customOrders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order submitted successfully:', data);
        // Navigate to the success page or another page
        navigate('/order-confirmation', { state: { orderData: data } });
      })
      .catch((error) => {
        console.error('Error submitting order:', error);
        // Optionally handle the error or show an error message
      });
  };

  return (
    <div>
      <Taskbar />
      <div className="order-container">
        <h2>Order Summary</h2>
        <div className="selected-items">
          <h3>Selected Packages</h3>
          <ul>
            <li><strong>Selection:</strong> {state.selection}</li>
            <li><strong>City:</strong> {state.city}</li>
            <li><strong>Price:</strong> {state.price}</li>
            <li><strong>Date:</strong> {state.date}</li>
            <li><strong>Time:</strong> {state.time}</li>
            <li><strong>Breakfast:</strong> {state.breakfast}</li>
            <li><strong>Lunch:</strong> {state.lunch}</li>
            <li><strong>Dinner:</strong> {state.dinner}</li>
          </ul>
        </div>
        <div className="delivery-details">
          <h3>Delivery Details</h3>
          <form onSubmit={handleSubmit} className='orderForm'>
            <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={deliveryDetails.name}
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <div className="form-group">
            <label>
              Address:
              <textarea
                name="address"
                value={deliveryDetails.address}
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <div className="form-group">
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={deliveryDetails.phone}
                onChange={handleChange}
                required
              />
            </label>
            </div>
            <button type="submit">Submit Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
