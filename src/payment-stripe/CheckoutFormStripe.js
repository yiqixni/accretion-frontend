// src/App.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

function CheckoutFormStripe() {
  return (
    <div className="App">
      <h1>Stripe Payment Demo</h1>
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default CheckoutFormStripe;
