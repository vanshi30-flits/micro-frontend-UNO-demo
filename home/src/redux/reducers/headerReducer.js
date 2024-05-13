const initialState ={
    userName: "vanshi patel"
}
// const headerReducer = (state='',action) =>{
    const headerReducer = (state = initialState,action) =>{
    switch (action.type){
        case 'HEADER-NAME':
            return state
        default :
            return state
    }
}

export default headerReducer