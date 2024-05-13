import React from 'react';
import './header.css';
import { useSelector } from 'react-redux';

const HeaderCompo = () => {
  const data = useSelector((state) =>{ 
    console.log("SH.............",state.header);
    console.log("SUN.............",state.userName);
    return state.header
  })

  console.log("from header",data);
  return (
    <>
      <div className='header-main'>
        <div>
          <p className='header-heading'>Hello {data.userName}</p>
        </div>
      </div>
    </>
  )
}

export default HeaderCompo
  