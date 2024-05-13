import { combineReducers } from "redux";
// import headerReducer from "./reducers/headerReducer";
import ordersReducer from "./reducers/ordersReducer";
// import profileReducer from "./reducers/profileReducer";
// import addressReducer from "./reducers/addressReducer";

const rootReducer = combineReducers({
    // profile: profileReducer,
    orders: ordersReducer,
    // header: headerReducer,
    // address: addressReducer
    
})

export default rootReducer;


