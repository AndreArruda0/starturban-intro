import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css'
import LogoImg from './assets/logoB.png'

function Header() {
    return(
     <div className="navBar">
      <img
        alt=""
        src={LogoImg}
        height="45px"
        className="d-inline-block align-top"
      />
   </div>
    )
}

export default Header;