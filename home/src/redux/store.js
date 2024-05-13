import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './reducers/profileReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
// import ordersReducer from './reducers/ordersReducer';
import headerReducer from './reducers/headerReducer';
import rootReducer from './rootReducer';
import {thunk} from 'redux-thunk';

// import logger from 'redux-logger';



// const mainReducer = combineReducers({
//     profile: profileReducer,
//     orders: ordersReducer,
//     header: headerReducer
    
// })


const commonData = {

    // profile: {
    //     firstName: localStorage.getItem('firstName'),
    //     lastName: localStorage.getItem('lastName'),        
    //     email: 'vanshi@gmail.com',
    //     contactNumber: localStorage.getItem('contactNumber'),
    //     countryCode: localStorage.getItem('countryCode'),
    //     birthdate: localStorage.getItem('birthdate'),
    //     gender: localStorage.getItem('gender'),
    //     text: localStorage.getItem('text'),
    //     year: localStorage.getItem('year'),
    //     month: localStorage.getItem('month'),
    //     day: localStorage.getItem('day'),   
    //     hour: localStorage.getItem('hour'),
    //     minute: localStorage.getItem('minute'),
    //     editState: Boolean(localStorage.getItem('editState')),
    //     tempStoreLocal: {}
    // },  
    // orders:{
    //     dataFromOrders:null
    // },
    // header:{
    //     userName: "vanshi"
    // },
    // address:[]
    
}

const store = createStore(rootReducer, commonData, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(mainReducer, commonData, composeWithDevTools());
export default store;   


// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import profileReducer from './reducers/profileReducer';
// import { composeWithDevTools } from '@redux-devtools/extension';


// const mainReducer = combineReducers({
//     profile: profileReducer
// })

// debugger;
// const commonData = {

//     profile: {
//         firstName: localStorage.getItem('firstName'),
//         lastName: localStorage.getItem('lastName'),
//         email: localStorage.getItem('email'),
//         contactNumber: localStorage.getItem('contactNumber'),
//         countryCode: localStorage.getItem('countryCode'),
//         birthdate: localStorage.getItem('birthdate'),
//         gender: localStorage.getItem('gender'),
//         text: localStorage.getItem('text'),
//         year: localStorage.getItem('year'),
//         month: localStorage.getItem('month'),
//         day: localStorage.getItem('day'),
//         hour: localStorage.getItem('hour'),
//         minute: localStorage.getItem('minute'),
//         editState: Boolean(localStorage.getItem('editState')),
//         tempStoreLocal: {}
//     }
// }

// const store = createStore(mainReducer, commonData, composeWithDevTools());
// export default store;   



