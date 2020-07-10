import axios from 'axios';

export const getTransaction = (data)=>{
    return {
        type : "GET",
        payload : axios({
            method : 'GET',
            url : `${process.env.REACT_APP_URL_API}api/transactions/user?search=&limit=10&page=1&sort=0&by=name&order=name`,
            headers : {
              Authorization : data.token
            },
            data : {
                id : data.id
            }
        })
    }
}
export const returnBook = (data,id) =>{
    return {
        type : "POST",
        payload : axios({
            method : 'POST',
            url : `${process.env.REACT_APP_URL_API}api/books/return/${id}`,
            headers : {
                Authorization : data.token
              },
        })
    }
}