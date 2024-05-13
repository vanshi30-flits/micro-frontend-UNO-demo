import React, { useEffect, useState } from 'react';
import './addressCompo.css';
import AddressSubCompo from './AddressSubCompo';
import NavbarMobileCompo from 'sidebar/NavbarMobileCompo';
import AddressFormCompo from './AddressFormCompo';
import { useDispatch, useSelector } from 'react-redux';
import { loadAddressList } from '../redux/actions/address/addressAction';
import Pagination from "pagination/Pagination";
import { data } from 'autoprefixer';

const AddressCompo = ({ dataFromSidebar, dataFromAddressCallback, handleAddressMobile }) => {

    useEffect(() => {
        dispatch(loadAddressList());        
    }, [])

    const [addressForm, setAddressForm] = useState(false);

    const dispatch = useDispatch();

    const dataAddress = useSelector(store => {
        console.log("SSSS:-------------", store.address.address);
        return store.address.address;
    });

    

    // -----------------------------------------------------
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(6);        
    const [totalData, setTotalData] = useState(dataAddress !== undefined ? dataAddress : []);
    useEffect(()=>{
        setTotalData(dataAddress);
    },[dataAddress])
    
    const totalPages = Math.ceil(totalData?.length / dataPerPage);

    console.log("totalData,",totalData);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentPageData = totalData?.slice(indexOfFirstData, indexOfLastData);
    console.log("currentPageData---------------", currentPageData);
    const handlePageNumberClick = (e) => {
        e.preventDefault();
        const currentPageRecieved = Number(e.target.id);
        setCurrentPage(currentPageRecieved);

    }
    const handleLeftPageShiftBtn = (e) => {
        e.preventDefault();
        setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
    }
    const handleRightPageShiftBtn = (e) => {
        e.preventDefault();
        console.log("clicked right btn pagination");

        setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)
    }


    console.log("CURENT [PAGE:",currentPage);
    console.log("CURENT [PAGE DAATA:",currentPageData);

    useEffect(()=>{
        if(currentPageData?.length < 1 && currentPage > 1){
            console.log("LESS");
            setCurrentPage(prevPage => prevPage - 1)
    
        }

    },[currentPage,currentPageData])

    // ----------------------------------------------------------
    const addressOutermostContainer = document.getElementsByClassName('address-outermost-container');


    useEffect(() => {

        const addressOutermostContainer = document.querySelector('.address-outermost-container');

        localStorage.setItem('addressOutermostContainerLocal', addressOutermostContainer.outerHTML);
        
        // &&& HERE &&& activate below line of code to dynamically increase height of sidebar
        // dataFromAddressCallback(addressOutermostContainer);

    }, [dataFromAddressCallback, addressOutermostContainer])

    const handleAddressForm = (e) => {
        


        setAddressForm(!addressForm);

        
        handleAddressMobile();
    }
    const ClickedMe = (e) => {
        e.preventDefault();
        const addressOutermostContainer = document.getElementsByClassName('address-outermost-container');


        addressOutermostContainer[0].classList.add('not-visible-address');
        dataFromSidebar.classList.add('sidebar-main-mobile');
    }
    return (
        <>
            <div className='address-outermost-container' >
                <div className='address-outermost-container2'>
                    <div className='address-outermost-container3'>

                        <NavbarMobileCompo ClickedMe={ClickedMe} navTitle='Delivery Address' />
                        <div className='address-wrapper'>
                            {
                                addressForm === true ? (<AddressFormCompo handleAddressForm={handleAddressForm} />) : (

                                    <div>
                                        <div className='address-list add-list-first-row'>
                                            <div className='address-add address-add-box address-box'>
                                                <div className='add-address-icon' style={{ fontSize: '2rem', border: '1px solid black', borderRadius: '50%', padding: '15px', marginBottom: '10px' }}>
                                                    <i class="fa-solid fa-plus" onClick={handleAddressForm}></i>
                                                </div>
                                                <p className='add-address-text'>Add new address</p>
                                            </div>
                                            <div className='address-default address-box'>
                                                <div className='address-default-heading'><span>Default</span></div>
                                                <div className='address-card-action'>
                                                    <li className='address-card-btn'><i class="fa-solid fa-pen" onClick={handleAddressForm}></i></li>
                                                </div>
                                                <div className='address-default-content-container'>
                                                    <ul className='address-ul-container'>
                                                        <li className='address-card-title address-card-data'>Bradon</li>
                                                        <li className='address-card-data'>one</li>
                                                        <li className='address-card-data'>two</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='address-list add-list-second-row'>
                                            {
                                                

                                                    currentPageData && currentPageData.map((address) => {                                                   
                                                    return (
                                                        <AddressSubCompo address={address} handleAddressForm={handleAddressForm} />

                                                    )
                                                })
                                            }
                                            

                                        </div>
                                        <div>
                                            {
                                                totalPages > 1 ?
                                                    <Pagination totalData={totalData} currentPage={currentPage} dataPerPage={dataPerPage} handlePageNumberClick={handlePageNumberClick} handleRightPageShiftBtn={handleRightPageShiftBtn} handleLeftPageShiftBtn={handleLeftPageShiftBtn} />
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddressCompo
