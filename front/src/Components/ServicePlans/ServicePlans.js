import React from 'react';
import Sidebar from '../SideBar/SideBar';
import PlanCard from '../PlanCard/PlanCard';
import './ServicePlans.css';

const ServicePlans = () => {
  return (
    <div className="service-plans-container">
      <Sidebar />
      <div className="service-plans-content">
        <h1>Service Plans</h1>
        <div className="tabs">
          <span className="tab active">Choose a plan</span>
          <span className="tab">Subscription Plans</span>
        </div>
        <div className="plan-cards">
          <PlanCard
            title="Featured Projects"
            priceMonthly="$65/mo"
            priceYearly="$702 per year (10%)"
            features={["Fixed slot on homepage", "Wider accessibility", "City wide visibility"]}
            isActive={true}
          />
          <PlanCard
            title="Seed Projects"
            priceMonthly="$85/mo"
            priceYearly="$900 per year (10%)"
            features={["Promoted Listings", "Better quality of leads", "Targeted marketing of listings"]}
            recommended={true}
          />
          <PlanCard
            title="Billboard Projects"
            priceMonthly="$115/mo"
            priceYearly="$1200 per year (12%)"
            features={["Locality level brand promotion", "Dedicated space on results page", "Enhanced visibility"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicePlans;
