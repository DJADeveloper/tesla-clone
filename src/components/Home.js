import React, { useState } from 'react';
import Section from './Section';
import './Home.css';
import Header from './Header';

const Home = () => {
  const [bottom, setBottom] = useState(false);
  return (
    <div className='Main'>
      <div className='vh-100 bImageS  section' id='ModelS'>
        <Header />
        <Section
          Model='Model S'
          text='Order Online for Touchless Delivery'
          btnText1='CUSTOM ORDER'
          btnText2='EXISTING INVENTORY'
          id='#Model3'
        />
      </div>
      <div className='vh-100 bImage3 section' id='Model3'>
        <Section
          Model='Model 3'
          text='Order Online for Touchless Delivery'
          btnText1='CUSTOM ORDER'
          btnText2='EXISTING INVENTORY'
          id='#ModelX'
        />
      </div>
      <div className='vh-100 bImageX section' id='ModelX'>
        <Section
          Model='Model X'
          text='Order Online for Touchless Delivery'
          btnText1='CUSTOM ORDER'
          btnText2='EXISTING INVENTORY'
          id='#ModelY'
        />
      </div>
      <div className='vh-100 bImageY d-flex flex-column section ' id='ModelY'>
        <Section
          Model='Model Y'
          text='Order Online for Touchless Delivery'
          btnText1='CUSTOM ORDER'
          btnText2='EXISTING INVENTORY'
          id='#Interior'
        />
      </div>
      <div className='vh-100 Interior d-flex flex-column section' id='Interior'>
        <Section
          Model='Interior'
          text='Order Online for Touchless Delivery'
          btnText1='CUSTOM ORDER'
          btnText2='EXISTING INVENTORY'
          id='#Solar'
        />
      </div>
      <div className='vh-100 Solar ' id='Solar'>
        <Section
          Model='Solar for New Roofs'
          text='Order Online for Touchless Delivery'
          btnText1='CUSTOM ORDER'
          btnText2='EXISTING INVENTORY'
          id='#Accessories'
        />
      </div>
      <div className='vh-100 Accessories section' id='Accessories'>
        <Section
          Model='Accessories'
          btnText1='ORDER'
          btnText2='CUSTOM'
          id='#ModelS'
          bottom={true}
        />
      </div>
    </div>
  );
};

export default Home;
