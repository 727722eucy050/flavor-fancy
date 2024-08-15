import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Order.css';
import Taskbar from './Taskbar';
import { createOrder } from './orderService'; // Import the service for API calls

const Order1 = ({ userId }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mealData = location.state || {};

  const [deliveryDetails, setDeliveryDetails] = React.useState({
    name: '',
    address: '',
    phone: '',
    date: '',  // New state for date
    time: '',  // New state for time
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({
      ...deliveryDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = {
      breakfastName: mealData.breakfast.name,
      lunchName: mealData.lunch.name,
      dinnerName: mealData.dinner.name,
      price: mealData.totalPrice,
      address: deliveryDetails.address,
      phone: deliveryDetails.phone,
      date: deliveryDetails.date,
      time: deliveryDetails.time,
      userId: userId, // Pass userId from props
      packageId: mealData.packageId, // Pass packageId from mealData
    };

    try {
      await createOrder(orderDetails); // Use the service to create an order
      console.log('Order submitted successfully');
      navigate('/order-confirmation'); // Navigate to order confirmation page
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div>
      <Taskbar />
      <div className="order-container">
        <h2>Order Summary</h2>
        <div className="selected-items">
          <h3>Selected Packages</h3>
          <ul>
            <li><strong>Breakfast:</strong> {mealData.breakfast.name}</li>
            <li><strong>Lunch:</strong> {mealData.lunch.name}</li>
            <li><strong>Dinner:</strong> {mealData.dinner.name}</li>
          </ul>
          <div className="total-price">
            <h3>Total Price: ₹{mealData.totalPrice}</h3>
          </div>
        </div>
        <div className="delivery-details">
          <h3>Delivery Details</h3>
          <form onSubmit={handleSubmit} className='orderForm'>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={deliveryDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                value={deliveryDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={deliveryDetails.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={deliveryDetails.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={deliveryDetails.time}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order1;
