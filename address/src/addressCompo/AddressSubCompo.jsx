import React from 'react';
import './addressCompo.css';
import { useDispatch } from 'react-redux';
import { deleteAddress, editAddress } from '../redux/actions/address/addressAction';

const AddressSubCompo = ({handleAddressForm,address}) => {
    const dispatch = useDispatch();
    

    const AddressFormHandleDelete = () => {
        if(window.confirm("you sure you want to delete this address?")){
            console.log("here");
            dispatch(deleteAddress(address.id));
        }

    }

    
    return (
        <>
            <div className='address-box'>
                <div className='address-card-action'>
                    <ul className='address-ul-container'>
                        <li className='address-card-btn'><i class="fa-solid fa-pen" onClick={()=>{dispatch(editAddress(address?.id));handleAddressForm()}}></i></li>
                        <li className='address-card-btn address-card-delete-btn'> <i class="fa-solid fa-trash" onClick={AddressFormHandleDelete}></i></li>
                        <li className='address-card-btn'><i class="fa-solid fa-bookmark"></i></li>
                    </ul>
                </div>
                <div className='address-card-content'>
                    <ul className='address-ul-container'>
                        <li><p className='address-card-title address-card-data'>
                            {address?.firstName} {address?.lastName}
                            
                        </p></li>
                        <li><p className='address-card-content address-card-data'>{address?.company}</p></li>
                        <li><p className='address-card-content address-card-data'>{address?.addressLine1}</p></li>
                        <li><p className='address-card-content address-card-data'>{address?.addressLine2}</p></li>
                        <li><p className='address-card-content address-card-data'>{address?.zipCode}</p></li>
                        <li><p className='address-card-content address-card-data'>{address?.country}</p></li>
                        <li><p className='address-card-content address-card-data'>{address?.contactNumber}</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AddressSubCompo
