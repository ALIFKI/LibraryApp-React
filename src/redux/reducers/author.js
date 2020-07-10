
const initialState = {
    isLoading : false,
    isError : false,
    errorMsg : '' ,
    successMsg : '',
    carousel : [],
    author : [],
    adventure : []
}

const author = (state = initialState,action)=>{
    switch (action.type) {
        case "GET_AUTHOR_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "GET_AUTHOR_REJECTED": 
        console.log(action.payload)
        return {
            ...state,
            isLoading : false
        }
        case "GET_AUTHOR_FULFILLED":
            console.log(action.payload)
        return {
            ...state,
            author : action.payload.data.data
        }
        case "DELETE_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "DELETE_REJECTED":
            console.log(action.payload) 
        return {
            ...state,
            isLoading : false
        }
        case "DELETE_FULFILLED":
            // console.log(action.meta)
            const dataSource = [...state.author]
        return {
            ...state,
            author : dataSource.filter(item => item.id_author !== action.meta)
        }     
        case "ADD_PENDING": 
        return {
            ...state,
            isLoading : true,
        }
        case "ADD_REJECTED":
            console.log(action.payload) 
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
            console.log(action.payload) 
        return {
            ...state,
            isLoading : false
        }
        case "EDIT_FULFILLED":
        const newData = [...state.author];
        const index = newData.findIndex(item => action.meta.id_author === item.id_author);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...action.meta });
        return {
            ...state,
            author : newData
        } 
        default: return state
    }
}

export default author