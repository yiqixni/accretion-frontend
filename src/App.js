import { createBrowserRouter, 
         createRoutesFromElements, 
        //  Routes, 
         Route, 
        //  Link, 
         RouterProvider} from 'react-router-dom'; 
// import {useState, useEffect} from 'react';

import './App.css'; 

import RootLayout from './layout/RootLayout.js';
import Home from './home/Home.js';
import Database from './database/Database.js';
import Marketplace from './markeplace/Marketplace.js';
import DatabaseDemo from './database-demo/DatabaseDemo.js';
import DatabaseDemoView from './database-demo/DatabaseDemoView.js';
import ContactUs from './contact-us/ContactUs.js';
import Leadership from './company/Leadership.js';
import CalendlyComponent from './contact-us/CalendlyComponent.js';
import MessageUsComponent from './contact-us/MessageUsComponent.js';
// import SellerUpload from './sell/SellerUpload.js'; 
import Buy from './buy/Buy.js'; 
// import SinglePropertyView from './buy/SinglePropertyView.js'; 
import PropertyInfo from './property-info/PropertyInfo.js';
import Sell from './sell/Sell.js'; 

// import AboutUs from './about-us/AboutUs.js'; 
import Company from './company/Company.js';
import Career from './company/Career.js';

import Signup from './user-auth/Signup.js';
import Login from './user-auth/Login.js';
import You from './You.js';

import NotFound from './not-found/NotFound.js';

import AuthJWT from './user-auth/AuthJWT.js'; 
import { useAuth } from './user-auth/AuthContext.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout/>} > 
      <Route index element={<Home/>} />      
      <Route path="database" element={<Database/>} /> 
      <Route path="database/demo" element={<DatabaseDemo/>} /> 
      <Route path="database/demo/view" element={<DatabaseDemoView/>} /> 
      <Route path="marketplace" element={<Marketplace/>} /> 
      <Route path="contact-us" element={<ContactUs/>} /> 
      <Route path="leadership" element={<Leadership/>} /> 
      <Route path="book-meeting" element={<CalendlyComponent/>} /> 
      <Route path="message-us" element={<MessageUsComponent/>} /> 
      <Route path="buy" element={<Buy/>} /> 
      <Route path="buy/:id" element={<PropertyInfo/>} /> 
      <Route path="sell" element={<Sell/>} />
      {/* <Route path="about-us" element={<AboutUs/>} /> */}
      <Route path="company" element={<Company/>} />
      <Route path="career" element={<Career/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="login" element={<Login/>} />
      <Route path="you" element={<You/>} />
      <Route path="*" element={<NotFound/>} />
    </Route>
  ) 
);


function App() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    AuthJWT(); 
  }
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
