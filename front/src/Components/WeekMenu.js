// src/components/WeekMenu.js
import React, { useState } from 'react';
import MenuItem from './MenuItem';
import './WeekMenu.css';

const WeekMenu = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDay, setSelectedDay] = useState('29 Mon');
  const [selectedCuisine, setSelectedCuisine] = useState('North Indian');
  const [selectedSession, setSelectedSession] = useState('Lunch');
  const [selectedPortion, setSelectedPortion] = useState('Lite');

  const toggleVegOnly = () => {
    setVegOnly(!vegOnly);
  };

  const menuItems = [
    {
      day: '29 Mon',
      items: [
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
          name: 'North Indian Prenium (Veg)',
          type: 'Premium',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Prenium (Veg)',
          type: 'Premium',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Prenium (Veg)',
          type: 'Premium',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'North Indian Lite (Veg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'North Indian Lite (Veg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Standard (Nonveg)',
          type: 'Standard',
          price: '₹170.00',
          description: 'Plain Rice, Home style Chicken Curry, Lehsuni Dal',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Lite Roti (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Home style Chicken Curry, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'South Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        {
          name: 'North Indian Premium (Veg)',
          type: 'Premium',
          price: '₹250.00',
          description: 'Paneer Butter Masala, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹300.00',
          description: 'Butter Chicken, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Veg)',
          type: 'Jumbo',
          price: '₹200.00',
          description: 'Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹230.00',
          description: 'Chicken Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        // More items can be added here for other days
      ],
      
    },
    // Add more days and items here
    {
      day: '30 Tue',
      items: [
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
      day: '29 Mon',
      items: [
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
          name: 'North Indian Lite (Veg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'North Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Home style Chicken Curry, Lehsuni Dal',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Lite Roti (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Home style Chicken Curry, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'South Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Premium (Veg)',
          type: 'Premium',
          price: '₹250.00',
          description: 'Paneer Butter Masala, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹300.00',
          description: 'Butter Chicken, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Veg)',
          type: 'Jumbo',
          price: '₹200.00',
          description: 'Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹230.00',
          description: 'Chicken Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        // More items can be added here for other days
      ],
      
    },
        {
          name: 'North Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Home style Chicken Curry, Lehsuni Dal',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'North Indian Lite Roti (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Home style Chicken Curry, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'South Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Premium (Veg)',
          type: 'Premium',
          price: '₹250.00',
          description: 'Paneer Butter Masala, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹300.00',
          description: 'Butter Chicken, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Veg)',
          type: 'Jumbo',
          price: '₹200.00',
          description: 'Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹230.00',
          description: 'Chicken Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        // More items can be added here for other days
      ],
      
    },
    {
      day: '31 Wed',
      items: [
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
          name: 'North Indian Lite (Veg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'North Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Home style Chicken Curry, Lehsuni Dal',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Lite Roti (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Home style Chicken Curry, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'South Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Premium (Veg)',
          type: 'Premium',
          price: '₹250.00',
          description: 'Paneer Butter Masala, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹300.00',
          description: 'Butter Chicken, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Veg)',
          type: 'Jumbo',
          price: '₹200.00',
          description: 'Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹230.00',
          description: 'Chicken Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        // More items can be added here for other days
      ],
      
    },
    {
      day: '01 Thu',
      items: [
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
          name: 'North Indian Lite (Veg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'North Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Home style Chicken Curry, Lehsuni Dal',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Lite Roti (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Home style Chicken Curry, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'South Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Premium (Veg)',
          type: 'Premium',
          price: '₹250.00',
          description: 'Paneer Butter Masala, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹300.00',
          description: 'Butter Chicken, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Veg)',
          type: 'Jumbo',
          price: '₹200.00',
          description: 'Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹230.00',
          description: 'Chicken Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        // More items can be added here for other days
      ],
      
    },
    {
      day: '01 Fri',
      items: [
        {
          name: 'North Indian Lite (Roti)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Aloo Matar Rassedar, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
          tag: 'High Fiber',
        },
        {
          name: 'North Indian Lite (Veg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Lehsuni Dal, Aloo Matar Rassedar',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'North Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Rice, Home style Chicken Curry, Lehsuni Dal',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Lite Roti (Nonveg)',
          type: 'Lite',
          price: '₹170.00',
          description: 'Plain Chapati, Home style Chicken Curry, Kala Jamun',
          cuisine: 'North Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'South Indian Lite (Veg)',
          type: 'Lite',
          price: '₹150.00',
          description: 'Plain Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: true,
        },
        {
          name: 'South Indian Lite (Nonveg)',
          type: 'Lite',
          price: '₹180.00',
          description: 'Chicken Dosa, Coconut Chutney, Sambar, Payasam',
          cuisine: 'South Indian',
          session: 'Lunch',
          veg: false,
        },
        {
          name: 'North Indian Premium (Veg)',
          type: 'Premium',
          price: '₹250.00',
          description: 'Paneer Butter Masala, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: true,
        },
        {
          name: 'North Indian Premium (Nonveg)',
          type: 'Premium',
          price: '₹300.00',
          description: 'Butter Chicken, Garlic Naan, Gulab Jamun',
          cuisine: 'North Indian',
          session: 'Dinner',
          veg: false,
        },
        {
          name: 'South Indian Jumbo (Veg)',
          type: 'Jumbo',
          price: '₹200.00',
          description: 'Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: true,
        },
        {
          name: 'South Indian Jumbo (Nonveg)',
          type: 'Jumbo',
          price: '₹230.00',
          description: 'Chicken Masala Dosa, Coconut Chutney, Sambar, Vada, Payasam',
          cuisine: 'South Indian',
          session: 'Breakfast',
          veg: false,
        },
        // More items can be added here for other days
      ],
      
    },
  ];

  const filteredItems = menuItems.find(menu => menu.day === selectedDay)?.items.filter(item => {
    return (!vegOnly || item.veg) &&
           item.cuisine === selectedCuisine &&
           item.session === selectedSession &&
           item.type === selectedPortion;
  });

  return (
    <div className="menu-page5">
      
      <div className="section5">
      <div className="filters5">
        <h2>Select your preferences to view menu</h2>
        <button className="filter-button5">Filter By</button>

        <div className="filter-options5">
          <div className="cuisine-types5">
            <button
              className={selectedCuisine === 'North Indian' ? 'active' : ''}
              onClick={() => setSelectedCuisine('North Indian')}
            >
              North Indian
            </button>
            <button
              className={selectedCuisine === 'South Indian' ? 'active' : ''}
              onClick={() => setSelectedCuisine('South Indian')}
            >
              South Indian
            </button>
          </div>

          <div className="meal-sessions5">
            <button
              className={selectedSession === 'Breakfast' ? 'active' : ''}
              onClick={() => setSelectedSession('Breakfast')}
            >
              Breakfast
            </button>
            <button
              className={selectedSession === 'Lunch' ? 'active' : ''}
              onClick={() => setSelectedSession('Lunch')}
            >
              Lunch
            </button>
            <button
              className={selectedSession === 'Dinner' ? 'active' : ''}
              onClick={() => setSelectedSession('Dinner')}
            >
              Dinner
            </button>
          </div>

          <div className="portion-sizes5">
            <button
              className={selectedPortion === 'Lite' ? 'active' : ''}
              onClick={() => setSelectedPortion('Lite')}
            >
              Lite
            </button>
            <button
              className={selectedPortion === 'Standard' ? 'active' : ''}
              onClick={() => setSelectedPortion('Standard')}
            >
              Standard
            </button>
            <button
              className={selectedPortion === 'Jumbo' ? 'active' : ''}
              onClick={() => setSelectedPortion('Jumbo')}
            >
              Jumbo
            </button>
            <button
              className={selectedPortion === 'Premium' ? 'active' : ''}
              onClick={() => setSelectedPortion('Premium')}
            >
              Premium
            </button>
          </div>

          <div className="veg-toggle5">
            <label htmlFor="veg-only5">Veg</label>
            <input type="checkbox" id="veg-only" checked={vegOnly} onChange={toggleVegOnly} />
          </div>
        </div>
      </div>

      <div className="week-menu5">
        <div className="week-days5">
          <button>&lt;</button>
          <div className="days5">
            {['27 Sat', '28 Sun', '29 Mon', '30 Tue', '31 Wed', '01 Thu', '02 Fri', '03 Sat', '04 Sun'].map(day => (
              <button
                key={day}
                className={selectedDay === day ? 'active' : ''}
                onClick={() => setSelectedDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <button>&gt;</button>
        </div>
      </div>

      <div className="menu-items5">
        {filteredItems && filteredItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      </div>
      
    </div>
    
  );
};

export default WeekMenu;