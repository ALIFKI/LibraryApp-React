const initialState = {
    isLoading : false,
    isLoadingBook : false,
    isLoadingGenre : false,
    isError : false,
    errorMsg : '' ,
    successMsg : '',
    carousel : [],
    book : [],
    adventure : []
}

const home = (state = initialState,action) =>{
    switch (action.type) {
        case "GET_BOOK_CAROUSEL_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "GET_BOOK_CAROUSEL_REJECTED":
            // console.log(action.payload)
        return {
            ...state,
            isError : true,
            isLoading : false
        }
        case "GET_BOOK_CAROUSEL_FULFILLED": 
        return {
            ...state,
            isError : false,
            isLoading : false,
            carousel : action.payload.data.data
        }
        case "GET_GENRE_PENDING" : 
        return {
            ...state,
            isLoadingGenre : true,
        }
        case "GET_GENRE_REJECTED": 
        return {
            ...state,
            isLoadingGenre : false,
            errorMsg : 'error',
        }
        case "GET_GENRE_FULFILLED":
                return {
                    ...state,
                    isLoadingGenre : false,
                    adventure : action.payload.data.data
                }
        case "GET_DATA_PENDING" : 
        return {
            ...state,
            isLoadingBook : true,
        }
        case "GET_DATA_REJECTED": 
        return {
            ...state,
            isLoadingBook : false,
            errorMsg : 'error',
        }
        case "GET_DATA_FULFILLED":
        return {
            ...state,
            isLoadingBook : false,
            book : action.payload.data.data
        }
        default:
            return state
    }

}

export default home