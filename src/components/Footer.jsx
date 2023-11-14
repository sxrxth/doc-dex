import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{ width: "100%", height: "300px", backgroundColor: "black" }}>
      <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
        <div style={{ width: "400px" }} className='website'>
          <h4 className='text-white'> <i className="fa-solid fa-upload text-white"></i>{' '}Bootstrap</h4>
          <p className='text-white'>
            Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
          </p>
          <p className='text-white'>
            Code licensed MIT, docs CC BY 3.0.
          </p>
          <p className='text-white'>
            Currently v5.3.2.
          </p>
        </div>
        <div className='links d-flex flex-column'>
          <h5 className='text-white'>Links</h5>
          <Link to={'/'} className='fs-6 text-white' style={{ textDecoration: "none" }}>Home</Link>
          <Link to={'/displayPage'} className='fs-6 text-white' style={{ textDecoration: "none" }}>Documents</Link>
        </div>
        <div className='guids d-flex flex-column'>
          <h5 className='text-white'>Guide</h5>
          <Link to={'https://react-bootstrap.github.io/'} className='fs-6 text-white' style={{ textDecoration: "none" }}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} className='fs-6 text-white' style={{ textDecoration: "none" }}>React Bootstrap</Link>
          <Link to={'https://react-bootstrap.github.io/'} className='fs-6 text-white' style={{ textDecoration: "none" }}>Routing</Link>
        </div>
        <div className='contact d-flex flex-column'>
          <h5 className='text-white'>Contact</h5>
          <div>
            <input type="text" placeholder='Enter your Mail' className='rounded p-1' />
            <button className='btn btn-dark rounded ms-1 text-white' style={{ width: "100px", height: "33px", padding: "0px" }}>Continue</button>
          </div>
        </div>
      </div>
      <p className='text-white' >Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
    </div>
  );
}

export default Footer;
