import React from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import AllEvents from '../components/AllEvents';

const Events = () => {
  return (
    <div className="min-h-screen bg-transparent text-white">
 
      <h1 className="text-center bg-heading-bg text-transparent bg-clip-text text-5xl font-bold mt-36 mb-10">Tech Events Showcase</h1>

      <UpcomingEvents />
      <AllEvents />
    </div>
  );
};

export default Events;

