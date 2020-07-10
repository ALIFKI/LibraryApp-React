const initialState = {
    isLoading : false,
    isError : false,
    errorMsg : '',
    history : [],
}

const history = (state = initialState,action) =>{
    switch (action.type) {
        case "GET_PENDING": 
            return {
            ...state,
            isloading : true,
        }
        case "GET_REJECTED":
            return {
                ...state,
                isLoading : false,
                errorMsg : ''
        }
        case "GET_FULFILLED" :
        return {
            ...state,
            isLoading : false,
            history : action.payload.data.data
        }
        case "RETURN_BOOK_PENDING":
            return {
            ...state,
            isloading : true,
        }
        case "RETURN_BOOK_REJECTED":
            return {
                ...state,
                isLoading : false,
                errorMsg : ''
        }
        case "RETURN_BOOK_FULFILLED" :
            if(action.payload.data.success){

                console.log(action)
                var arr = state.books
                arr.splice(action.meta, 1);
                return {
                    ...state,
                    isLoading : false,
                    books : arr
                }
            }
            else{
                return {
                    ...state
                }
            }
        case "ADD_BOOK_PENDING": 
            return {
            ...state,
            isloading : true,
        }
        case "ADD_BOOK_REJECTED":
            return {
                ...state,
                isLoading : false,
                errorMsg : ''
        }
        case "ADD_BOOK_FULFILLED" :
            console.log(action.payload) 
        return {
            ...state,
            isLoading : false,
        }
        case "EDIT_BOOK_PENDING": 
            return {
            ...state,
            isloading : true,
        }
        case "EDIT_BOOK_REJECTED":
            return {
                ...state,
                isLoading : false,
                errorMsg : ''
        }
        case "EDIT_BOOK_FULFILLED" :
            console.log(action.payload)
        return {
            ...state,
            isLoading : false,
        }
        default:
            return{
                ...state
            }
    }
}

export default history