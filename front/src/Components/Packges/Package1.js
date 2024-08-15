import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Taskbar from '../Taskbar/Taskbar';
import './Package1.css'; // Import the CSS

const Package1 = () => {
  const { id } = useParams(); // Grab the ID from the URL
  const [packageDetails, setPackageDetails] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    fetch(`http://localhost:8080/packages/${id}`)
      .then(response => response.json())
      .then(data => setPackageDetails(data))
      .catch(error => console.error('Error fetching package details:', error));
  }, [id]);

  if (!packageDetails) {
    return <p>Loading...</p>;
  }

  // Function to handle submission and navigation
  const handleOrderNow = () => {
    navigate('/order1', {
      state: {
        breakfast: {
          name: packageDetails.breakfastName,
          price: packageDetails.breakfastPrice,
        },
        lunch: {
          name: packageDetails.lunchName,
          price: packageDetails.lunchPrice,
        },
        dinner: {
          name: packageDetails.dinnerName,
          price: packageDetails.dinnerPrice,
        },
        totalPrice: packageDetails.price,
      },
    });
  };

  return (
    <div>
      <Taskbar />
      <div className="package-container">
        <div className="package-content">
          <h1>{packageDetails.packageName}</h1>

          <div className="meal-details">
            <div className="meal">
              <h2>Breakfast</h2>
              <img src={packageDetails.breakfastImage} alt={packageDetails.breakfastName} />
              <p><strong>Name:</strong> {packageDetails.breakfastName}</p>
              <p><strong>Description:</strong> {packageDetails.breakfastDescription}</p>
              <p><strong>Price:</strong> ₹{packageDetails.breakfastPrice}</p>
            </div>

            <div className="meal">
              <h2>Lunch</h2>
              <img src={packageDetails.lunchImage} alt={packageDetails.lunchName} />
              <p><strong>Name:</strong> {packageDetails.lunchName}</p>
              <p><strong>Description:</strong> {packageDetails.lunchDescription}</p>
              <p><strong>Price:</strong> ₹{packageDetails.lunchPrice}</p>
            </div>

            <div className="meal">
              <h2>Dinner</h2>
              <img src={packageDetails.dinnerImage} alt={packageDetails.dinnerName} />
              <p><strong>Name:</strong> {packageDetails.dinnerName}</p>
              <p><strong>Description:</strong> {packageDetails.dinnerDescription}</p>
              <p><strong>Price:</strong> ₹{packageDetails.dinnerPrice}</p>
            </div>
          </div>

          <div className="total-price">
            <h2>Total Package Price: ₹{packageDetails.price}</h2>
          </div>

          {/* Submit Button */}
          <button className="order-now-button" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package1;
