import axios from 'axios';

export const getBookbyId = (data)=>{
    return {
        type : "GET_BOOK_ID",
        payload : 
        axios({
            method : 'GET',
            url : `${process.env.REACT_APP_URL_API}api/books/${data.id}`,
            headers : {
                Authorization : data.token
            }
        })
    }
}

export const borrow = (data)=>{
    return {
        type : "BORROW",
        payload :
        axios({
            method : 'POST',
            headers : {
                Authorization : data.token
            },
            url : `${process.env.REACT_APP_URL_API}api/books/borrow/${data.id}`,
            data : {
                periode_of_time : 2
            }
        })
    }
}
