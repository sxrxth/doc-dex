import React from 'react';
import "./LandingPage.css";
import { Button } from 'react-bootstrap';
import "../components/bootstrap.min.css";
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landing' style={{height:"90vh"}}>
      <div className='container row'>
        <div className='col'>
          <h1>DOC-DEX</h1>
          <h4>Powerful Document Management Simplified</h4>
         <Link to={"/displayPage"}> <Button className='btn btn-dark'>Get Started</Button></Link>
        </div>
        <div className='col'>
          <h5 className='text-black' >Effortless Document Creation and Editing</h5>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
