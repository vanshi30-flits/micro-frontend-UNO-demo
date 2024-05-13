import React, {  useEffect, useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


{/* &&& HERE &&& */}
const SidebarCompo = ({ storePage,totalDataFromOrdersState, totalDataFromWishlistState,dataFromSidebarCallback, handleAddressMobile, handleOrdersMobile, handleProfileMobile, handleWishlistMobile, handleRecentlyViewedMobile, handleCreditsMobile, handleManageCreditsMobile, handleFriendsMobile, handlePasswordMobile }) => {
// const SidebarCompo = ({ storePage,totalDataFromOrdersState, totalDataFromWishlistState,dataFromSidebarCallback, handleAddressMobile, handleOrdersMobile, handleProfileMobile, handleWishlistMobile, handleRecentlyViewedMobile, handleCreditsMobile, handleManageCreditsMobile, handleFriendsMobile, handlePasswordMobile }) => {
  // const SidebarCompo = () => {
  const sidebarMain = document.getElementsByClassName('sidebar-main');

  const data = useSelector((state) => {
    return state
});
  
  



  // &&& HERE &&& (here just one line , DONOT ACTIVATE USEefFECT()) ONLY ACTIVATE dataFromSidebarCallback
// ------------------------------------------------------------------
  // &&& HERE &&& activate below line of code to dynamically increase height of sidebar
  // dataFromSidebarCallback(sidebarMain[0]);
// ------------------------------------------------------------------



  

  // let defaultActive;

  // console.l  og("store form sidebad", storePage.profile)

  // useEffect(()=>{

  //   console.log("jjjjj");
  //   console.log(storePage.profile);
  //   console.log(storePage.address);
  //   if(storePage.profile === true || storePage.profile === String(true)){
  //     defaultActive = 1;
  //     console.log("DEFAULT FROM PROFILE",defaultActive);
  //   }else if(storePage.address === true || storePage.address === String(true)){
  //     defaultActive = 2;
  //     console.log("DEFAULT FROM ADDRESS",defaultActive);
  //   }

  // },[])


  // const [active,setActive] = useState(()=>{
  //   switch (storePage){
  //     case storePage.profile:
  //       return 1;
  //     case storePage.adddress:
  //       return 2
  //     default:
  //       return null 
  //   }
  // });

  // &&& HERE &&&
  // useEffect(() => {


  //   if (storePage.profile === true || storePage.profile === String(true)) {      
  //     setActive(1);
  //   } else if (storePage.address === true || storePage.address === String(true)) {
  //    setActive(2)
  //   } else if (storePage.orders === true || storePage.orders === String(true)) {
  //     setActive(3);
  //   }else if (storePage.wishlist === true || storePage.wishlist === String(true)){
  //     setActive(4);
  //   }else if(storePage.viewed === true){
  //     setActive(5);
  //   }else if(storePage.credits === true){
  //     setActive(6);
  //   }else if(storePage.manageCredits === true){
  //     setActive(7);
  //   }else if(storePage.friends === true){
  //     setActive(8);
  //   }else if(storePage.password === true){
  //     setActive(9);
  //   }

  // }, [storePage])



  // &&& HERE &&&
  // const [active, setActive] = useState(()=>{
  //   if (storePage.profile === true || storePage.profile === String(true)) {      
  //     return 1;
  //   } else if (storePage.address === true || storePage.address === String(true)) {
  //     return 2;
  //   } else if (storePage.orders === true || storePage.orders === String(true)) {
  //     return 3;
  //   }else if (storePage.wishlist === true || storePage.wishlist === String(true)){
  //     return 4;
  //   }else if(storePage.viewed === true){
  //    return 5;
  //   }else if(storePage.credits === true){
  //     return 6;
  //   }else if(storePage.manageCredits === true){
  //     return 7;
  //   }else if(storePage.friends === true){
  //     return 8;
  //   }else if(storePage.password === true){
  //     return 9;
  //   }

  // }
  // );

// &&& HERE IS REPLACEMENT
  const [active,setActive] = useState(1);


  const menuItem = document.getElementsByClassName('menu-item');

  const handleActive = (divNumber) => {
    setActive(divNumber);
  }








  return (
    <>
      <div className='sidebar-main'>
      
        <div className='sidebar-inner'>      
          <div className={active === 1 ? 'menu-item-active' : 'menu-item'} onClick={(e) => { handleActive(1); handleProfileMobile(e) }}>
            
            <Link to={'/profile'} id='profile' className='profile-sidebar' exact='true'>
              <span className='item-name'>my profile</span>
              <span className='sidebar-icon'><i className="fa-regular fa-user"></i></span>
            </Link>
          </div>

          <div className={active === 2 ? 'menu-item-active' : 'menu-item'} onClick={(e) => { handleActive(2); handleAddressMobile(e) }}>            
            <Link to={'/address'} className='profile-sidebar'>

              <span className='item-name'>Delivery address</span>
              <span className='sidebar-icon'><i className="fa-solid fa-location-dot"></i></span>
            </Link>
            
          </div>

          <div className={active === 3 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(3); handleOrdersMobile() }}>
            
            <Link to={'/orders'} className='profile-sidebar'>

              <span className='item-name'>my orders</span>
              <span className='sidebar-icon'><i className="fa-solid fa-cart-shopping"></i></span>
              {/* {
                totalDataFromOrdersState ? <span className='count-bg-color count'>{totalDataFromOrdersState}</span>:('')
              } */}
              {

                // &&& HERE &&&
                // data.orders.dataFromOrders ? <span className='count-bg-color count'>{data.orders.dataFromOrders}</span>:('')
              }
            </Link>
            {/* </a> */}
          </div>


          <div className={active === 4 ? 'menu-item-active js' : 'menu-item js'} onClick={() => { handleActive(4); handleWishlistMobile() }}>
            
            <Link to={'/wishlist'} className='profile-sidebar'>

              <span className='item-name'>my wishlist</span>
              <span className='sidebar-icon'><i className="fa-regular fa-heart"></i></span>
              {
                totalDataFromWishlistState ? <span className='count-bg-color count'>{totalDataFromWishlistState}</span>:('')
              }
            </Link>
            
          </div>


          <div className={active === 5 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(5); handleRecentlyViewedMobile() }}>
           
            <Link to={'/recentlyviewed'} className='profile-sidebar'>

              <span className='item-name'>Recently viewed</span>
              <span className='sidebar-icon'><i className="fa-brands fa-searchengin"></i></span>
            </Link>
            
          </div>


          <div className={active === 6 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(6); handleCreditsMobile() }}>
            
            <Link className='profile-sidebar' to={'/credits'}>
              <span className='item-name'>my credits</span>
              <span className='sidebar-icon'><i className="fa-regular fa-credit-card"></i></span>
            </Link>
            
          </div>


          <div className={active === 7 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(7); handleManageCreditsMobile() }}>
            
            <Link to={'/managecredits'} className='profile-sidebar'>

              <span className='item-name'>how to manage credits</span>
              <span className='sidebar-icon'><i className="fa-solid fa-hand-holding"></i></span>
            </Link>
            
          </div>


          <div className={active === 8 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(8); handleFriendsMobile() }}>
            
            <Link to={'/referfriends'} className='profile-sidebar'>

              <span className='item-name'>refer friends</span>
              <span className='sidebar-icon'><i className="fa-solid fa-user-group"></i></span>
            </Link>
            
          </div>


          <div className={active === 9 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(9); handlePasswordMobile() }}>
            
            <Link to={'/password'} className='profile-sidebar'>

              <span className='item-name'>change password</span>
              <span className='sidebar-icon'><i className="fa-solid fa-key"></i></span>
            </Link>
            
          </div>


          <div className={active === 10 ? 'menu-item-active' : 'menu-item'} onClick={() => { handleActive(10) }}>
            <a id='profile' className='profile-sidebar' exact='true' href='#/profile'>
              <span className='item-name'>logout</span>
              <span className='sidebar-icon'><i className="fa-solid fa-power-off"></i></span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarCompo
