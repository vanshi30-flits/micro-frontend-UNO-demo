import * as types from './addressType';
import axios from 'axios';

const getAddressList = (data) =>{
    return {
        type: types.GET_ADDRESS_LIST,
        payload: data
    }
}

const deleteAddressItem = (id) =>{
    return {
        type: types.DELETE_ADDRESS,
        payload: id
    }
}

// const deleteAddressItem = () =>{
//     return {
//         type: types.DELETE_ADDRESS,
        
//     }
// }

const addAddressItem = (data) =>{
    return{

        type: types.ADD_ADDRESS,
        payload:data

    }
}

const editAddressItem = id =>{
    return {
        type: types.EDIT_ADDRESS,
        payload: id
    }
}
// export const loadAddressList = () =>{
//     return function(dispatch){
//         axios.get('http://localhost:5000/address').then((response)=>{
//             console.log("response",response.data);
//             dispatch(getAddressList(response.data))
//         }).catch(err => console.log(err))
//     }
// }

export const loadAddressList =  () =>{
    return async function (dispatch){
        const response = await axios.get('http://localhost:5000/address');
        console.log("response",response.data);
                    dispatch(getAddressList(response.data))
        
    }
}

export const deleteAddress = (id) =>{
    return function(dispatch){
        axios.delete('http://localhost:5000/address/'+id).then((response) => {
            console.log("delete response", response.data);
            dispatch(deleteAddressItem(response.data));
            
            // dispatch(deleteAddressItem());
            // dispatch(getAddressList());
            
        }).catch(err =>console.log(err))
    }
}

export const addAddress = (data) =>{
    return function(dispatch){
        axios.post('http://localhost:5000/address',data).then((response) => {
            console.log("add address response", response.data);
            dispatch(addAddressItem(response.data));                        
        }).catch(err =>console.log(err))
    }
}

export const editAddress = (id) =>{
    return function(dispatch){
        axios.put('http://localhost:5000/address/'+id).then((response) => {
            console.log("EDIT address response", response.data);
            dispatch(editAddressItem(response.data));                        
        }).catch(err =>console.log(err))
    }
}