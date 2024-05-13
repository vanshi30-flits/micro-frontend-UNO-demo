import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAddress } from '../redux/actions/address/addressAction';

const AddressFormCompo = ({ handleAddressForm }) => {
    const dispatch = useDispatch();

    const [addressFormData,setAddressFormData]= useState({
        firstName:'',
        lastName:'',
        addressLine1:'',
        addressLine2:'',
        company:'',
        zipCode:'',
        contactNumber:'',
        countryCode:'',
        city:'',
        country:'',
        defaultCheck:false
    })

    const handleChangeAdressFormData = (e) =>{
        let {name,value} = e.target;
        setAddressFormData({...addressFormData,[name]:value})
    }

    const {firstName,lastName,addressLine1,addressLine2,company,zipCode,contactNumber,countryCode,city,country,defaultCheck} = addressFormData
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("inside submit");
        dispatch(addAddress(addressFormData));
        
        handleAddressForm();
    }
    return (
        <>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className='address-form-outermost-container'>
                            <p className='address-form-heading address-form-heading-size'>Add New Address</p>

                            <div className='address-form-fields-container'>
                                <div className='address-form-first-name-padding address-form-first-name-margin'>
                                    <div className='address-form-first-name-input-wrapper'>
                                        <label className='address-form-label'>First Name:</label>
                                        <input className='address-form-first-name-input' value={firstName} type='text' name='firstName' placeholder='First Name' onChange={handleChangeAdressFormData}></input>
                                    </div>
                                </div>
                                <div className='address-form-last-name-padding address-form-first-name-margin'>
                                    <div className='.address-form-last-name-input-wrapper'>
                                        <label className='address-form-label'>Last Name:</label>
                                        <input className='address-form-last-name-input' value={lastName} type='text' name='lastName' placeholder='Last Name' onChange={handleChangeAdressFormData}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='address-form-fields-container'>
                                <div className='address-form-address-line1-padding address-form-address-line1-margin'>
                                    <div className='address-form-address-line1-input-wrapper'>
                                        <label className='address-form-label'>Address Line 1:</label>
                                        <input className='address-form-address-line1-input' value={addressLine1} type='text' name='addressLine1' placeholder='Address Line 1' onChange={handleChangeAdressFormData}></input>

                                    </div>
                                </div>
                                <div className='address-form-address-line2-padding address-form-address-line2-margin'>
                                    <div className='address-form-address-line2-input-wrapper'>
                                        <label className='address-form-label'>Address Line 2:</label>
                                        <input className='address-form-address-line2-input' value={addressLine2} type='text' name='addressLine2' placeholder='Address Line 2' onChange={handleChangeAdressFormData}></input>

                                    </div>
                                </div>
                            </div>
                            <div className='address-form-fields-container'>
                                <div className='address-form-company-padding address-form-company-margin'>
                                    <div className='address-form-company-input-wrapper'>
                                        <label className='address-form-label'>Company :</label>
                                        <input className='address-form-company-input' value={company} type='text' name='company' placeholder='Company' onChange={handleChangeAdressFormData}></input>

                                    </div>
                                </div>
                                <div className='address-form-zip-code-padding address-form-zip-code-margin'>
                                    <div className='address-form-zip-code-input-wrapper'>
                                        <label className='address-form-label'>Postal/Zip Code :</label>
                                        <input className='address-form-zip-code-input' value={zipCode} type='text' name='zipCode' placeholder='Postal/Zip Code' onChange={handleChangeAdressFormData}></input>

                                    </div>
                                </div>
                                <div className='address-form-contact-number-padding address-form-contact-number-margin'>
                                    <div className='address-form-contact-number-input-wrapper'>
                                        <label className='address-form-label'>Contact Number :</label>
                                        
                                        <input type='tel' name='contactNumber' value={contactNumber} onChange={handleChangeAdressFormData} className='address-form-contact-number-tel-input address-form-contact-number-tel-input-edit-mode'  placeholder='Contact Number' ></input>
                                        <input type='text' 
                                        
                                        value={countryCode ? countryCode : '+1'}
                                        disabled className='address-form-contact-number-text-input'></input>
                                        <div className='address-form-contact-number-dropdown-container'>
                                            <span className='address-form-country-flag-span'>

                                            </span>
                                            <div className='address-form-dropdown-wrapper'>
                                                <select className='address-form-select-option' name='countryCode' onChange={handleChangeAdressFormData} value={countryCode}>
                                                    <option>+1</option>
                                                    <option>+91</option>
                                                    <option>+93</option>
                                                </select>
                                                <div className='address-form-select-icon-container'><i class="fa-solid fa-angle-down"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='address-form-fields-container'>
                                <div className='address-form-city-padding address-form-city-margin'>
                                    <div className='address-form-city-input-wrapper'>
                                        <label className='address-form-label'>City:</label>
                                        <input type='text' placeholder='City' value={city} name='city' className='address-form-city-input' onChange={handleChangeAdressFormData}></input>
                                    </div>
                                </div>
                                <div className='address-form-country-padding address-form-country-margin'>
                                    <div className='address-form-country-input-wrapper'>
                                        <label className='address-form-label'>Country:</label>
                                        <div className='address-form-country-dropdowm-wrapper'>
                                            <select value={country} className='address-form-country-select' name='country' onChange={handleChangeAdressFormData}>
                                                <option value='United States'> United States</option>
                                                <option value='India'> India</option>
                                                <option value='Canada'> Canada</option>
                                            </select>
                                            <div className='address-form-country-icon-wrapper'>
                                            <i class="fa-solid fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='address-form-fields-container'>
                                <div className='address-form-mark-default-container-padding'>
                                    <div className='address-form-mark-default-wrapper'>
                                        <input type='checkbox' name='defaultCheck' className='address-form-checkbox address-form-checkbox-display' value={defaultCheck} onChange={handleChangeAdressFormData}></input>
                                        <label className='address-form-checkbox-label'>Mark as Default Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className='address-form-fields-container'>
                                <div className='address-form-btn-padding-container address-form-btn-text-align-container'>
                                    <button className='address-form-btn address-form-btn-margin address-form-btn-light-color' onClick={handleAddressForm}>Cancel</button>
                                    {/* <button className='address-form-btn address-form-btn-margin address-form-btn-dark-color'>Save</button> */}
                                    <input type='submit' value='save' className='address-form-btn address-form-btn-margin address-form-btn-dark-color'></input>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div></div>


                
            </div>
        </>
    )
}

export default AddressFormCompo
