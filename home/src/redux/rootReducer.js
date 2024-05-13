import { combineReducers } from "redux";
import headerReducer from "./reducers/headerReducer";
// import ordersReducer from "./reducers/ordersReducer";
import ordersReducer from "sidebar/ordersReducer";
// import profileReducer from "./reducers/profileReducer";
// import addressReducer from "./reducers/addressReducer";
import addressReducer from "address/addressReducer";
import profileReducer from "profile/profileReducer";


const rootReducer = combineReducers({
    // profile: profileReducer,
    profile: profileReducer,
    orders: ordersReducer,
    header: headerReducer,
    address: addressReducer
    
})

export default rootReducer;


