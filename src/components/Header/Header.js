import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

function Header() {
  return (
    <nav>
        <div>
        <Link to={'/'}><img src ={logo}/></Link>
        </div>
        <div>
            <li>
                <Link to={'/speakers'}>SPEAKERS</Link>
            </li>
            <li>
                <Link to={'/summit'}>SUMMIT</Link>
            </li>
        </div>
    </nav>
  )
}

export default Header