import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Taskbar from '../Taskbar/Taskbar';
import './CustomOrder.css';

function CustomOrder() {
  const [selection, setSelection] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [breakfast, setBreakfast] = useState('');
  const [lunch, setLunch] = useState('');
  const [dinner, setDinner] = useState('');
  const price = 850; // Fixed price

  const navigate = useNavigate();

  // Veg and Non-Veg Options
  const vegOptions = {
    breakfast: ['Idly', 'Dosa', 'Poori', 'Pongal', 'Kichadi', 'Sevai'],
    lunch: ['Meals', 'Tomato Rice', 'Lemon Rice', 'Mini meals', 'Ghee Rice'],
    dinner: ['Chapathi', 'Noodles', 'Uttappam', 'Dosa', 'Idly'],
  };

  const nonVegOptions = {
    breakfast: ['Egg Dosa', 'Chicken Sandwich', 'Omelette'],
    lunch: ['Chicken Briyani', 'Mutton Curry', 'Fish Fry'],
    dinner: ['Chicken Parota', 'Mutton Dosa', 'Egg Noodles'],
  };

  // Determine menu options based on selection
  const menuOptions = selection === 'veg' ? vegOptions : nonVegOptions;

  // Handle form submit
  const handleSubmit = () => {
    navigate('/order', {
      state: {
        selection,
        city,
        date,
        time,
        breakfast,
        lunch,
        dinner,
        price,
        
      },
    });
  };

  return (
    <div>
      <Taskbar />
      <div className="container">
        <h1>Custom Order</h1>
        <div className="form-container">
          <div className="form-group">
  <input
    type="radio"
    id="veg"
    value="veg"
    checked={selection === 'veg'}
    onChange={(e) => setSelection(e.target.value)}
  />
  <label htmlFor="veg">Veg</label>

  <input
    type="radio"
    id="non-veg"
    value="non-veg"
    checked={selection === 'non-veg'}
    onChange={(e) => setSelection(e.target.value)}
  />
  <label htmlFor="non-veg">Non-Veg</label>
</div>

          <div className="form-group">
            <label>City:</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Chennai">Chennai</option>
              <option value="Madurai">Madurai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <h2>Create Your Menu</h2>
          <div className="form-group">
            <label>Breakfast:</label>
            <select
              value={breakfast}
              onChange={(e) => setBreakfast(e.target.value)}
            >
              <option value="">Select Breakfast</option>
              {menuOptions.breakfast.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Lunch:</label>
            <select value={lunch} onChange={(e) => setLunch(e.target.value)}>
              <option value="">Select Lunch</option>
              {menuOptions.lunch.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Dinner:</label>
            <select value={dinner} onChange={(e) => setDinner(e.target.value)}>
              <option value="">Select Dinner</option>
              {menuOptions.dinner.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <h3>Total Price: ₹{price}</h3>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CustomOrder;
