

const headerReducer = (state='',action) =>{
    
    switch (action.type){
        case 'HEADER-NAME':
            return state
        default :
            return state
    }
}

export default headerReducer