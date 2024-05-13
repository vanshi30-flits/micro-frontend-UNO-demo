import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import ProfileCompo from "profile/Profile";
import './main.css';
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderCompo from './Header/HeaderCompo';
import AddressCompo from "address/AddressCompo";
import ProfileCompoRedux from "profile/ProfileCompoRedux";
import SidebarCompo from 'sidebar/SidebarCompo';

// const App = () => (
function App() {
  const parser = new DOMParser();
  const localHTML = localStorage.getItem('addressOutermostContainerLocal')
  const parseHTML = parser.parseFromString(localHTML, 'text/html');
  const restoredElement = parseHTML.querySelector('.address-outermost-container');



  const [storePage, setStorePage] = useState({
    profile: false,
    address: false,
    orders: false,
    wishlist: false,
    viewed: false,
    credits: false,
    manageCredits: false,
    friends: false,
    password: false
  })
  // const isRender = useRef(true);

  useEffect(() => {

    const pageVariable = JSON.parse(localStorage.getItem('page'));
    if (pageVariable !== null) {
      setStorePage(pageVariable)
    }
  }, [])
  useEffect(() => {

    const handleBeforeUnload = (event) => {
      localStorage.setItem('page', JSON.stringify(storePage))
    }
    window.addEventListener('beforeunload', handleBeforeUnload)

    // return () =>{
    //   window.removeEventListener('beforeunload',handleBeforeUnload);
    // }
  }, [storePage])


  const [contactUs, setContactUs] = useState(false);
  const [dataFromSidebar, setDataFromSidebar] = useState('');
  const [dataFromAddress, setDataFromAddress] = useState('');
  // const [dataFromAddress, setDataFromAddress] = useState(restoredElement);
  const [dataFromProfile, setDataFromProfile] = useState('');
  const [dataFromOrders, setDataFromOrders] = useState('');
  const [dataFromWishlist, setDataFromWishlist] = useState('');
  const [dataFromRecentlyViewed, setDataFromRecentlyViewed] = useState('');
  const [dataFromCredits, setDataFromCredits] = useState('');
  const [dataFromManageCredits, setDataFromManageCredits] = useState('');
  const [dataFromFriends, setDataFromFriends] = useState('');
  const [dataFromPassword, setDataFromPassword] = useState('');
  const [totalDataFromOrdersState, setTotalDataFromOrdersState] = useState('');
  const [totalDataFromWishlistState, setTotalDataFromWishlistState] = useState('');

  let rightMain = document.getElementsByClassName('right-main');
  useEffect(() => {



    dataFromAddressCallback();

    dataFromOrdersCallback();

    dataFromProfileCallback();

    dataFromSidebarCallback();

    dataFromWishlistCallback();

    dataFromRecentlyViewedCallback();

    dataFromCreditsCallback();

    dataFromManageCreditsCallback();

    dataFromFriendsCallback();

    dataFromPasswordCallback();




  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    setContactUs(false)
  }

  const dataFromSidebarCallback = (data) => {
    console.log("INSIDE SIDEBAR CB");
    setDataFromSidebar(data);


  }
  const dataFromProfileCallback = (data) => {
    console.log("INSIDE PROFILE CB");
    setDataFromProfile(data);

  }
  const dataFromAddressCallback = (data) => {
    console.log("INSIDE ADDRESS CB");
    setDataFromAddress(data);

  }
  const dataFromOrdersCallback = (data) => {
    setDataFromOrders(data);

  }
  const dataFromWishlistCallback = (data) => {
    setDataFromWishlist(data);

  }
  const dataFromRecentlyViewedCallback = (data) => {
    setDataFromRecentlyViewed(data);

  }
  const dataFromCreditsCallback = (data) => {
    setDataFromCredits(data);

  }
  const dataFromManageCreditsCallback = (data) => {
    setDataFromManageCredits(data);

  }
  const dataFromFriendsCallback = (data) => {
    setDataFromFriends(data);

  }
  const dataFromPasswordCallback = (data) => {
    setDataFromPassword(data);

  }

  const handleProfileMobile = (e) => {    
    setStorePage({ ...storePage, profile: true, address: false, orders: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: false });
    
    if (dataFromProfile !== undefined) {
      dataFromProfile.classList.remove('not-visible-profile');
      let clientHeight = `${dataFromProfile.clientHeight}px`;

      if(dataFromProfile.clientHeight < 435){
        clientHeight = '435px'
      }
      dataFromProfile.style.setProperty('height', clientHeight);
      dataFromProfile.firstElementChild.style.setProperty('height', 'auto');
      dataFromProfile.firstElementChild.style.setProperty('min-height', clientHeight);
      dataFromSidebar.style.setProperty('height', clientHeight);

    }

    if(dataFromSidebar !== undefined){

      dataFromSidebar.classList.remove('sidebar-main-mobile');
    }

  }

  const handleAddressMobile = (e) => {

    setStorePage({ ...storePage, address: true, profile: false, orders: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: false });


     dataFromAddressCallback();


    

    if (dataFromAddress !== undefined) {

      
      dataFromAddress.classList.remove('not-visible-orders');
      let clientHeight = `${dataFromAddress.clientHeight}px`;
      if(dataFromAddress.clientHeight < 435){
        console.log("client height entered if " ,clientHeight);
        clientHeight = '435px';
        
      }
      
      dataFromAddress.style.setProperty('height', clientHeight);      
      dataFromAddress.firstElementChild.style.setProperty('min-height',clientHeight)
      dataFromAddress.firstElementChild.style.setProperty('height','auto')      
      dataFromSidebar.style.setProperty('height', clientHeight);      
    }

    if(dataFromSidebar !== undefined){

      dataFromSidebar.classList.remove('sidebar-main-mobile');
    }
    


  }
  // const handleOrdersMobile = (e) => {


  //   // dataFromSidebar.style.setProperty('height',((`${dataFromOrders.clientHeight}px`) ? (`${dataFromOrders.clientHeight}px`) : ('476px')));
  //   // dataFromSidebar.style.setProperty('height',(clientHeight || '476px'));

  //   // THIS
  //   setStorePage({ ...storePage, orders: true, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: false });

  //   // dataFromOrders.classList.remove('non-visible-orders');
  //   if (dataFromOrders !== undefined) {

  //     dataFromOrders.classList.remove('not-visible-orders');
  //     const clientHeight = `${dataFromOrders.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', (clientHeight === '0px') ? '2518px' : clientHeight);
  //     rightMain[0].style.setProperty('height', (clientHeight === '0px') ? '2518px' : clientHeight);
  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');
  // }


  // const handleWishlistMobile = () => {
  //   setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: true, viewed: false, credits: false, manageCredits: false, friends: false, password: false });
  //   if (dataFromWishlist !== undefined) {

  //     dataFromWishlist.classList.remove('not-visible-wishlist');
  //     const clientHeight = `${dataFromWishlist.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
  //     rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');
  // }


  // const handleRecentlyViewedMobile = () => {
  //   setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: true, credits: false, manageCredits: false, friends: false, password: false });
  //   if (dataFromRecentlyViewed !== undefined) {

  //     dataFromRecentlyViewed.classList.remove('not-visible-viewed');
  //     const clientHeight = `${dataFromRecentlyViewed.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
  //     rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');
  // }
  // const handleCreditsMobile = () => {
  //   setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: true, manageCredits: false, friends: false, password: false });
  //   if (dataFromCredits !== undefined) {

  //     dataFromCredits.classList.remove('not-visible-credits');
  //     const clientHeight = `${dataFromCredits.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
  //     rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '476px')) ? '476px' : clientHeight);
  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');
  // }

  // const handleManageCreditsMobile = () => {
  //   setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: true, friends: false, password: false });
  //   if (dataFromManageCredits !== undefined) {
  //     dataFromManageCredits.classList.remove('not-visible-manage-credits');
  //     const clientHeight = `${dataFromManageCredits.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
  //     rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');

  // }

  // const handleFriendsMobile = () => {
  //   setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: true, password: false });
  //   if (dataFromFriends !== undefined) {
  //     dataFromFriends.classList.remove('not-visible-friends');
  //     const clientHeight = `${dataFromFriends.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
  //     rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');

  // }
  // const handlePasswordMobile = () => {
  //   setStorePage({ ...storePage, orders: false, profile: false, address: false, wishlist: false, viewed: false, credits: false, manageCredits: false, friends: false, password: true });
  //   if (dataFromPassword !== undefined) {
  //     dataFromPassword.classList.remove('not-visible-password');
  //     const clientHeight = `${dataFromPassword.clientHeight}px`;
  //     dataFromSidebar.style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);
  //     rightMain[0].style.setProperty('height', ((clientHeight === '0px') || (clientHeight < '400px')) ? '476px' : clientHeight);

  //   }
  //   dataFromSidebar.classList.remove('sidebar-main-mobile');
  // }


  // const totalDataFromOrdersFunc = data => {
  //   setTotalDataFromOrdersState(data)
  // }

  // const totalDataFromWIshlistFunc = data => {
  //   setTotalDataFromWishlistState(data)
  // }
  return (
    <div className="container">

      <Provider store={store}>

        <>
          <div className='main'>

            <BrowserRouter>

              <HeaderCompo />

              <div className='to-manage-nav-height'>


                {/* <SidebarCompo storePage={storePage} totalDataFromOrdersState={totalDataFromOrdersState} totalDataFromWishlistState={totalDataFromWishlistState} dataFromSidebarCallback={dataFromSidebarCallback} dataFromAddress={dataFromAddress} dataFromProfile={dataFromProfile} dataFromOrders={dataFromOrders} handleAddressMobile={handleAddressMobile} handleProfileMobile={handleProfileMobile} handleOrdersMobile={handleOrdersMobile} handleWishlistMobile={handleWishlistMobile} handleRecentlyViewedMobile={handleRecentlyViewedMobile} handleCreditsMobile={handleCreditsMobile} handleManageCreditsMobile={handleManageCreditsMobile} handleFriendsMobile={handleFriendsMobile} handlePasswordMobile={handlePasswordMobile} /> */}
                <SidebarCompo storePage={storePage} dataFromSidebarCallback={dataFromSidebarCallback} dataFromAddress={dataFromAddress} dataFromProfile={dataFromProfile} handleAddressMobile={handleAddressMobile} handleProfileMobile={handleProfileMobile} />



                <div className='right-main' >

                  <Routes>

                    {['/', '/profile'].map(path => <Route path={path} element={<ProfileCompoRedux dataFromProfileCallback={dataFromProfileCallback} handleProfileMobile={handleProfileMobile} dataFromSidebar={dataFromSidebar} />}> </Route>)}
                    <Route exact path='/address' element={<AddressCompo dataFromAddressCallback={dataFromAddressCallback} dataFromSidebar={dataFromSidebar} handleAddressMobile={handleAddressMobile} dataFromAddress={dataFromAddress} />}> </Route>
                  </Routes>
                  
                </div>
              </div>
            </BrowserRouter>
          </div>
        </>
      </Provider>
    </div>
  )
}
// );
ReactDOM.render(<App />, document.getElementById("app"));
