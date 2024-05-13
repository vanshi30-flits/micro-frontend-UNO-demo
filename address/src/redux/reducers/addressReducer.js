import { ADD_ADDRESS, DELETE_ADDRESS, EDIT_ADDRESS, GET_ADDRESS_LIST } from "../actions/address/addressType";

// const initialState = {
//     address:[]
// }

const initialState = [];
const addressReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ADDRESS_LIST:

            return {...state,address: action.payload}
            // return [...state,address: action.payload]
        case DELETE_ADDRESS:
            const afterDeletedItemList = state.address.filter(data => data.id !== action.payload.id)
            return {...state,address: afterDeletedItemList}
            // return state
        case ADD_ADDRESS:
            
            // return {...state,address: state.address.address.push(action.payload)}


            // for obj chat
            // return {...state, 
            //     address:{...state.address,
            //         address:[...state.address.address,action.payload]
            // }}

            // for array chat (this works )
            return {...state, address:[...state.address,action.payload]}




            // return {...state,address:{
            //     address:[...state.address,action.payload]
            // }}
            // return state;
            
        // case GET_ONE_ADDRESS:
        //     const getOneToBeEditedItemFromList = state.address.find(data => data.id === action.payload.id)
        //     console.log("GET ONE TO BE EDITED FROM LIST, REDUCER:",getOneToBeEditedItemFromList);            
        //     return state

        case EDIT_ADDRESS:
            const afterEditedItemList = state.address.find(data => data.id === action.payload.id)
            console.log("EDIT REDUCER:",afterEditedItemList);

            return state
        default :
            return state;
    }
}
export default addressReducer;