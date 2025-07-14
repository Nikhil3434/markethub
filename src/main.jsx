
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import UserTypeSection from './Components/UserTypeSection';
import BuyersLogin from './Components/Buyerslogin';
import SellersLogin from './Components/Sellerlogin';

import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/usertype" element={<UserTypeSection />} />
        <Route path="/buyer-login" element={<BuyersLogin />} />
        <Route path="/seller-login" element={<SellersLogin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
