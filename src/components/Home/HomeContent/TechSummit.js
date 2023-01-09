import React from 'react';
import { Link } from 'react-router-dom';
import summit from '../../../images/summit.png'

function TechSummit() {
  return (
    <div className='techSummit-container'>        
        <div className='techSummit-container-content'>
            <h1>Largest Tech <br/> Conference in <br/> Caucasus</h1>
            <h3>Tbilisi, Georgia</h3>
            <h3>SEPT 5-7, 2025</h3>
            <div className='techSummit-container-content-btns'>
                <div >
                    <Link to={'/registration'} className='register-btn' target='_blank'>Register Now</Link>
                </div>
                <div>
                    <a className='learnMore-btn'>Learn More</a>
                </div>
            </div>
        </div>
        <img className='summit-img' src ={summit} />
    </div>
  )
}

export default TechSummit