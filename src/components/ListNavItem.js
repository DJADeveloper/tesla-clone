import React from 'react';

const ListNavItem = ({ navItem, href }) => {
  return (
    <div className='d-flex justify-content-center'>
      <li className='nav-item  mx-1 px-2 border-radius '>
        <a className='nav-link active' aria-current='page' href={href}>
          {navItem}
        </a>
      </li>
    </div>
  );
};

export default ListNavItem;
