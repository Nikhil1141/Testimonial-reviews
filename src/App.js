import React from 'react';
import './style.css';
import TestimonialReviews from './TestimonialReviews';

export default function App() {
  return (
    <div>
      <div className='main'>
        <h1>Edupoly Reviews</h1>
        <div className='underline'></div>
      </div>
      <TestimonialReviews />
    </div>
  );
}
