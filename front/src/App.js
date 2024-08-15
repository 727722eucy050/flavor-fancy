import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './Components/Aboutus/Aboutus';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import Customorder from './Components/CustomOrder/CustomOrder';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Order from './Components/Order/Order';
import Order1 from './Components/Order/Order1';
import Package from './Components/Package/Package';
import Package1 from './Components/Packges/Package1';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import OrderConfirmation from './Components/Order/OrderConfirmation';
import AddPackage from './Components/AddPackage/AddPackage';
const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          
          
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/add-package" element={<AddPackage/>}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/customorder" element={<Customorder />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/package" element={<Package/>}/>
          <Route path="/package/:id" element={<Package1/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/order1" element={<Order1/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
