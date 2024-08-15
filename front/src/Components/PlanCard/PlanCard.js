import React from 'react';
import './PlanCard.css';

const PlanCard = ({ title, priceMonthly, priceYearly, features, isActive, recommended }) => {
  return (
    <div className={`plan-card ${isActive ? 'active' : ''} ${recommended ? 'recommended' : ''}`}>
      <h2>{title}</h2>
      <p className="price-monthly">{priceMonthly}</p>
      <p className="price-yearly">{priceYearly}</p>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="activate-btn">{isActive ? 'Activate' : recommended ? 'Get Started! (RECOMMENDED)' : 'Get Started!'}</button>
    </div>
  );
};

export default PlanCard;
