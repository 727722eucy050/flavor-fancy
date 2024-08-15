import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPackage.css';
import Taskbar from '../Taskbar/Taskbar';

const AddPackage = () => {
  const [packageData, setPackageData] = useState({
    packageName: '',
    breakfastName: '',
    breakfastDescription: '',
    breakfastImage: '',
    breakfastPrice: '',
    lunchName: '',
    lunchDescription: '',
    lunchImage: '',
    lunchPrice: '',
    dinnerName: '',
    dinnerDescription: '',
    dinnerImage: '',
    dinnerPrice: '',
    price: '',
    veg: true,
    rating: '',
    img: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageData({
      ...packageData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/packages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(packageData),
    })
      .then((response) => response.json())
      .then(() => {
        setSuccessMessage('Package added successfully!');
        setPackageData({
          packageName: '',
          breakfastName: '',
          breakfastDescription: '',
          breakfastImage: '',
          breakfastPrice: '',
          lunchName: '',
          lunchDescription: '',
          lunchImage: '',
          lunchPrice: '',
          dinnerName: '',
          dinnerDescription: '',
          dinnerImage: '',
          dinnerPrice: '',
          price: '',
          veg: true,
          rating:'',
          img: '',
        });
      })
      .catch((error) => console.error('Error adding package:', error));
  };

  return (
    <div>
      <Taskbar/>
      <div className="add-package-container">
        <h2>Add New Package</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit} className='form'>
          <div className="form-group">
            <label htmlFor="packageName">Package Name:</label>
            <input
              type="text"
              id="packageName"
              name="packageName"
              value={packageData.packageName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="breakfastName">Breakfast Name:</label>
            <input
              type="text"
              id="breakfastName"
              name="breakfastName"
              value={packageData.breakfastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="breakfastDescription">Breakfast Description:</label>
            <input
              type="text"
              id="breakfastDescription"
              name="breakfastDescription"
              value={packageData.breakfastDescription}
              onChange={handleChange}
            />
          </div>
          {/*<div className="form-group">
            <label htmlFor="breakfastImage">Breakfast Image URL:</label>
            <input
              type="text"
              id="breakfastImage"
              name="breakfastImage"
              value={packageData.breakfastImage}
              onChange={handleChange}
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="breakfastPrice">Breakfast Price:</label>
            <input
              type="number"
              id="breakfastPrice"
              name="breakfastPrice"
              value={packageData.breakfastPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lunchName">Lunch Name:</label>
            <input
              type="text"
              id="lunchName"
              name="lunchName"
              value={packageData.lunchName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lunchDescription">Lunch Description:</label>
            <input
              type="text"
              id="lunchDescription"
              name="lunchDescription"
              value={packageData.lunchDescription}
              onChange={handleChange}
            />
          </div>
          {/*<div className="form-group">
            <label htmlFor="lunchImage">Lunch Image URL:</label>
            <input
              type="text"
              id="lunchImage"
              name="lunchImage"
              value={packageData.lunchImage}
              onChange={handleChange}
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="lunchPrice">Lunch Price:</label>
            <input
              type="number"
              id="lunchPrice"
              name="lunchPrice"
              value={packageData.lunchPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dinnerName">Dinner Name:</label>
            <input
              type="text"
              id="dinnerName"
              name="dinnerName"
              value={packageData.dinnerName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dinnerDescription">Dinner Description:</label>
            <input
              type="text"
              id="dinnerDescription"
              name="dinnerDescription"
              value={packageData.dinnerDescription}
              onChange={handleChange}
            />
          </div>
          {/*<div className="form-group">
            <label htmlFor="dinnerImage">Dinner Image URL:</label>
            <input
              type="text"
              id="dinnerImage"
              name="dinnerImage"
              value={packageData.dinnerImage}
              onChange={handleChange}
            />
          </div>*/}
          <div className="form-group">
            <label htmlFor="dinnerPrice">Dinner Price:</label>
            <input
              type="number"
              id="dinnerPrice"
              name="dinnerPrice"
              value={packageData.dinnerPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Total Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={packageData.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="veg">Veg:</label>
            <input
              type="checkbox"
              id="veg"
              name="veg"
              checked={packageData.veg}
              onChange={(e) => setPackageData({ ...packageData, veg: e.target.checked })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={packageData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
            />
          </div>
          {/*<div className="form-group">
            <label htmlFor="img">Main Image URL:</label>
            <input
              type="text"
              id="img"
              name="img"
              value={packageData.img}
              onChange={handleChange}
            />
          </div>*/}
          <button type="submit">Add Package</button>
        </form>
      </div>
    </div>
  );
};

export default AddPackage;
