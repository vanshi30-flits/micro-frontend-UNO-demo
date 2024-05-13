export const profileSave = (data) =>{
    console.log("DATA INSIDE PROFILESAVE ACTION",data);
    return{
        type: 'SAVE_PROFILE',
        payload: data
    }
}

export const profileEdit = (data) =>{
    console.log("DATA INSIDE PROFILEEDIT ACTION",data);
    return{
        type: 'EDIT_PROFILE',
        payload: data
    }
}

export const tempStoreLocal = (data) =>{
    return {
        type: 'TEMP_STORE_LOCAL',
        payload: data
    }
}

export const profileEditFirstName = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT FIRST NAME ACTION",data);
    return{
        type: 'EDIT_PROFILE_FIRSTNAME',
        payload: data
    }
}
export const profileEditLastName = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT LAST NAME ACTION",data);
    return{
        type: 'EDIT_PROFILE_LASTNAME',
        payload: data
    }
}
export const profileEditEmail = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT EMAIL ACTION",data);
    return{
        type: 'EDIT_PROFILE_EMAIL',
        payload: data
    }
}
export const profileEditContactNumber = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT CONTACT NUMBER ACTION",data);
    return{
        type: 'EDIT_PROFILE_CONTACTNUMBER',
        payload: data
    }
}
export const profileEditCountryCode = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT COUNTRY CODE ACTION",data);
    return{
        type: 'EDIT_PROFILE_COUNTRYCODE',
        payload: data
    }
}
export const profileEditBirthdate = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT BIRTHDATE ACTION",data);
    return{
        type: 'EDIT_PROFILE_BIRTHDATE',
        payload: data
    }
}
export const profileEditGender = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT GENDER ACTION",data);
    return{
        type: 'EDIT_PROFILE_GENDER',
        payload: data
    }
}
export const profileEditText = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT TEXT ACTION",data);
    return{
        type: 'EDIT_PROFILE_TEXT',
        payload: data
    }
}
export const profileEditYear = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT YEAR ACTION",data);
    return{
        type: 'EDIT_PROFILE_YEAR',
        payload: data
    }
}
export const profileEditMonth = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT MONTH ACTION",data);
    return{
        type: 'EDIT_PROFILE_MONTH',
        payload: data
    }
}
export const profileEditDay = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT DAY ACTION",data);
    return{
        type: 'EDIT_PROFILE_DAY',
        payload: data
    }
}
export const profileEditHour = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT HOUR ACTION",data);
    return{
        type: 'EDIT_PROFILE_HOUR',
        payload: data
    }
}
export const profileEditMinute = (data) =>{
    console.log("DATA INSIDE PROFILE EDIT MINUTE ACTION",data);
    return{
        type: 'EDIT_PROFILE_MINUTE',
        payload: data
    }
}
export const profileEditState = (data) =>{
    console.log("PROFILE EDIT STATE=====> action");
    return{
        type:'PROFILE_EDIT_STATE',
        payload:data
    }
}

export const setTempStoreLocal = (data) =>{
    return {
        type: 'SET_TEMP_STORE_LOCAL',
        payload: data
    }
}
export const profileCancel = (data) =>{
    console.log("DATA INSIDE PROFILECANCEL ACTION",data);
    return{
        type: 'CANCEL_PROFILE',
        payload: data
    }
}

