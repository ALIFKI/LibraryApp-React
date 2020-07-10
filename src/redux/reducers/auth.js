const initialState = {
    isLoading : false,
    isError : false,
    errorMsg : '' ,
    successMsg : '',
    auth : {},
    isLogin : false,
}

const auth = (state = initialState,action) =>{
    switch (action.type) {
        case "LOGIN_PENDING": 
        return { 
            ...state,
            isLoading : true,
            isError : false
        }
        case "LOGIN_REJECTED": 
        console.log(action.payload.data)
        return { 
            ...state,
            isLoading : false,
            isError : true,
            errorMsg : 'User not found'
        }
        case "LOGIN_FULFILLED": 
        return { 
            ...state,
            isLoading : false,
            isError : false,
            isLogin : true,
            auth : action.payload.data.data[0]
        }
        case "LOGOUT": 
        return { 
            ...state,
            isLoading : false,
            isError : false,
            errorMsg : '' ,
            auth : {}
        }
        case 'REGISTER_PENDING' :
            console.log(action.payload) 
        return {
            ...state,
            isLoading : true,
            errorMsg : ''
        }
        case 'REGISTER_REJECTED' :
        return {
            ...state,
            isLoading : true,
            errorMsg : action.payload.response.data.msg
        }
        case 'REGISTER_FULFILLED' :
            console.log(action.payload)
        return {
            ...state,
            isLoading : true,
            successMsg : action.payload.data.msg
        }
        default:
            return state
    }
}

export default auth