import React from 'react';
import Fade from 'react-reveal';
import './Home.css';

const Section = ({ Model, text, bgImage, btnText1, btnText2, id, bottom }) => {
  return (
    <div className='section d-flex flex-column section'>
      <div className='container d-flex flex-column align-items-between justify-content-between'>
        <div className=' itemText  d-flex flex-column align-items-center mb-5 justify-content-start '>
          <Fade bottom>
            <div className='d-flex flex-column align-items-center '>
              <h1>{Model}</h1>
              <p>{text}</p>
            </div>
          </Fade>
        </div>
        <Fade bottom>
          <div className='buttonContainer flex-column d-flex mt-5 d-md-flex vh-50 justify-content-end  align-items-center mt-5'>
            <div className='d-flex flex-column d-md-inline-block my-2'>
              <button className='btn btn-dark rounded-pill  mx-2 my-2'>
                {btnText1}
              </button>
              <button className='btn btn-light rounded-pill mx-2 '>
                {btnText2}
              </button>
            </div>
            <div className='arrowContainer py-5 d-flex justify-content-center '>
              <a href={id} className='arrowContainer '>
                {bottom ? (
                  <i className='bi bi-chevron-up fs-3 text-white fw-bold '></i>
                ) : (
                  <i className='bi bi-chevron-down fs-3 text-white fw-bold '></i>
                )}
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Section;
