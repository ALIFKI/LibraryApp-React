
const initialState = {
    isLoading : false,
    isError : false,
    errorMsg : '' ,
    successMsg : '',
    carousel : [],
    genre : [],
    adventure : []
}

const genre = (state = initialState,action)=>{
    switch (action.type) {
        case "GET_GENRE_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "GET_GENRE_REJECTED": 
        return {
            ...state,
            isLoading : false
        }
        case "GET_GENRE_FULFILLED":
            return {
                 ...state,
                genre : action.payload.data.data
            }
        case "DELETE_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "DELETE_REJECTED":
        return {
            ...state,
            isLoading : false
        }
        case "DELETE_FULFILLED":
            // console.log(action.meta)
            const dataSource = [...state.genre]
        return {
            ...state,
            genre : dataSource.filter(item => item.id_genre !== action.meta)
        }     
        case "ADD_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "ADD_REJECTED":
        return {
            ...state,
            isLoading : false
        }
        case "ADD_FULFILLED":
        return {
            ...state,
        }
        case "EDIT_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "EDIT_REJECTED":
        return {
            ...state,
            isLoading : false
        }
        case "EDIT_FULFILLED":
        const newData = [...state.genre];
        const index = newData.findIndex(item => action.meta.id_genre === item.id_genre);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...action.meta });
        return {
            ...state,
            genre : newData
        } 
        default: return state
    }
}

export default genre