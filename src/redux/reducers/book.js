const initialState = {
    isLoading : false,
    isError : false,
    errorMsg : '' ,
    successMsg : '',
    carousel : [],
    book : {},
    adventure : []
}

const book = (state = initialState,action)=>{
    switch (action.type) {
        case "GET_BOOK_ID_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "GET_BOOK_ID_REJECTED": 
        console.log(action.payload)
        return {
            ...state,
            isLoading : false
        }
        case "GET_BOOK_ID_FULFILLED":
            console.log(action.payload)
        return {
            ...state,
            book : action.payload.data.data
        }
        case "BORROW_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "BORROW_REJECTED":
            console.log(action.payload) 
        return {
            ...state,
            isLoading : false
        }
        case "BORROW_FULFILLED":
            console.log(action.payload)
        return {
            ...state,
            book : {
                ...state.book,
                status : 'Borrowed'
            }
        }     
        default: return state
    }
}

export default book