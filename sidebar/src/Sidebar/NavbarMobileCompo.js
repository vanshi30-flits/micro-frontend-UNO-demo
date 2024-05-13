import React from 'react';
import './navbar.css';



const NavbarMobileCompo = ({ClickedMe,navTitle}) => {
  
  
  return (
    <>
      <div className='back-btn-wrapper'>
       
        <button className='back-btn-inner' onClick={ClickedMe}>
        
          <i className="fa-regular fa-circle-left nav-back-icon"></i>
          Back
        </button>
        
        <span className='nav-name'>{navTitle}</span>
        
        
      </div>
    </>
  )
}

export default NavbarMobileCompo


