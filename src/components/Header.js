import React from 'react';
import './Header.css';
import ListNavItem from './ListNavItem';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-none px-3'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            <img src='/assets/images/logo.svg' alt='teslalogo' />
          </a>
          {/* TOGGLER */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          {/* END OF TOGGLER */}

          <div
            className='collapse navbar-collapse  '
            id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex  '>
              <ListNavItem navItem='Modal S' href='#ModelS' />
              <ListNavItem navItem='Modal 3' href='#Model3' />
              <ListNavItem navItem='Modal X' href='#ModelX' />
              <ListNavItem navItem='Modal Y' href='#ModelY' />
              <ListNavItem navItem='Solar Roof' href='#SolarRoof' />
              <ListNavItem navItem='Solar Panels' href='#SolarPanels' />
            </ul>
          </div>
          <div className='col collapse navbar-collapse  '>
            <ul className='navbar-nav ms-auto  mb-2 mb-lg-0 d-flex justify-content-center'>
              <ListNavItem navItem='Shop' />
              <ListNavItem navItem='Account' />
              <ListNavItem navItem='Menu' />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
