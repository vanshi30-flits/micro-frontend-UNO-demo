const initialState = {
    firstName: localStorage.getItem('firstName'),
    lastName: localStorage.getItem('lastName'),        
    email: 'vanshi@gmail.com',
    contactNumber: localStorage.getItem('contactNumber'),
    countryCode: localStorage.getItem('countryCode'),
    birthdate: localStorage.getItem('birthdate'),
    gender: localStorage.getItem('gender'),
    text: localStorage.getItem('text'),
    year: localStorage.getItem('year'),
    month: localStorage.getItem('month'),
    day: localStorage.getItem('day'),   
    hour: localStorage.getItem('hour'),
    minute: localStorage.getItem('minute'),
    editState: Boolean(localStorage.getItem('editState')),
    tempStoreLocal: {}
};

const profileReducer = (state = initialState, action) => {
// const profileReducer = (state = '', action) => {
    console.log("ENTERED REDUCER");
    switch (action.type) {
        case 'SAVE_PROFILE':
                    
            const { firstName, lastName, email, birthdate, gender, contactNumber, countryCode, text, year, month, day, hour, minute ,editState} = action.payload;
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('email', email);
            localStorage.setItem('birthdate', birthdate);
            localStorage.setItem('gender', gender);
            localStorage.setItem('contactNumber', contactNumber);
            localStorage.setItem('countryCode', countryCode);
            localStorage.setItem('text', text);
            localStorage.setItem('year', year);
            localStorage.setItem('month', month);
            localStorage.setItem('day', day);
            localStorage.setItem('hour', hour);
            localStorage.setItem('minute', minute);            
            localStorage.setItem('editState', editState);
            
            const updatedState = { ...state, firstName, lastName, email, birthdate, gender, contactNumber, countryCode, text, year, month, day, hour, minute, editState,tempStoreLocal:{} };
            return updatedState;

        case 'EDIT_PROFILE_FIRSTNAME':
            console.log("edit firstname clicked", action.payload);
            return { ...state, firstName: action.payload }

        case 'EDIT_PROFILE_LASTNAME':
            console.log("edit lastname clicked", action.payload);
            return { ...state, lastName: action.payload }
        case 'EDIT_PROFILE_EMAIL':
            console.log("edit email clicked", action.payload);
            return { ...state, email: action.payload }
        case 'EDIT_PROFILE_CONTACTNUMBER':
            console.log("edit contactNumber clicked", action.payload);
            return { ...state, contactNumber: action.payload }
        case 'EDIT_PROFILE_COUNTRYCODE':
            console.log("edit countrycode clicked", action.payload);
            return { ...state, countryCode: action.payload }
        case 'EDIT_PROFILE_BIRTHDATE':
            console.log("edit birthdate clicked", action.payload);
            return { ...state, birthdate: action.payload }
        case 'EDIT_PROFILE_GENDER':
            console.log("edit gender clicked", action.payload);
            return { ...state, gender: action.payload }
        case 'EDIT_PROFILE_TEXT':
            console.log("edit text clicked", action.payload);
            return { ...state, text: action.payload }
        case 'EDIT_PROFILE_YEAR':
            console.log("edit year clicked", action.payload);
            return { ...state, year: action.payload }
        case 'EDIT_PROFILE_MONTH':
            console.log("edit month clicked", action.payload);
            return { ...state, month: action.payload }
        case 'EDIT_PROFILE_DAY':
            console.log("edit day clicked", action.payload);
            return { ...state, day: action.payload }
        case 'EDIT_PROFILE_HOUR':
            console.log("edit hour clicked", action.payload);
            return { ...state, hour: action.payload }
        case 'EDIT_PROFILE_MINUTE':
            console.log("edit minute clicked", action.payload);
            return { ...state, minute: action.payload }
        case 'PROFILE_EDIT_STATE':

            console.log("ACTION.PAYLOAD", action.payload);
            localStorage.setItem('editState', action.payload);
            return { ...state, editState: action.payload };

        case 'TEMP_STORE_LOCAL':
            localStorage.setItem('tempStoreLocal',action.payload);
            return {...state,tempStoreLocal: action.payload};

        case 'SET_TEMP_STORE_LOCAL':
            const newTempStore = {[action.payload.name]:action.payload.value};            
            return {...state,tempStoreLocal: {...state.tempStoreLocal,[action.payload.name]:action.payload.value}};
            
        


        case 'EDIT_PROFILE':


            console.log("EDIT CLICKED", action.payload);
            const updatedStateEdit = {
                ...state,
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName'),
                email: localStorage.getItem('email'),
                birthdate: localStorage.getItem('birthdate'),
                gender: localStorage.getItem('gender'),
                contactNumber: localStorage.getItem('contactNumber'),
                countryCode: localStorage.getItem('countryCode'),
                text: localStorage.getItem('text'),
                year: localStorage.getItem('year'),
                month: localStorage.getItem('month'),
                day: localStorage.getItem('day'),
                hour: localStorage.getItem('hour'),
                minute: localStorage.getItem('minute'),                
                // editState: false,
                editState: localStorage.setItem('editState',action.payload.editState)                

            }
            return updatedStateEdit

        case 'CANCEL_PROFILE':

            console.log("CANCEL CLICKED", action.payload);
            const updatedStateCancel = {
                ...state,
                firstName: localStorage.getItem('firstName'),
                lastName: localStorage.getItem('lastName'),
                email: localStorage.getItem('email'),
                birthdate: localStorage.getItem('birthdate'),
                gender: localStorage.getItem('gender'),
                contactNumber: localStorage.getItem('contactNumber'),
                countryCode: localStorage.getItem('countryCode'),
                text: localStorage.getItem('text'),
                year: localStorage.getItem('year'),
                month: localStorage.getItem('month'),
                day: localStorage.getItem('day'),
                hour: localStorage.getItem('hour'),
                minute: localStorage.getItem('minute'),
                tempStoreLocal:{},                
                // editState: true                
                editState: localStorage.setItem('editState',action.payload.editState)
            }
            return updatedStateCancel
        default:
            return state

    }
    
}

export default profileReducer;
