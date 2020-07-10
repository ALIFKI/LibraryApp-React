import axios from 'axios'


export const getCarousel = (auth)=>{
    return {
        type : "GET_BOOK_CAROUSEL",
        payload : 
        axios({
            method : 'GET',
            url : 'http://localhost:3000/api/books?search=&page=1&limit=3&sort=0&by=title&order=created_at',
            headers: {
                Authorization : auth
            }
        })
    }
}

export const getGenre = (token)=>{
    return {
        type : "GET_GENRE",
        payload : 
        axios({
            method : 'GET',
        url : 'http://localhost:3000/api/books?search=&page=1&limit=100&sort=1&by=title&order=title',
            headers: {
                Authorization : token
            }
        })
    }
}

export const getData = (token) =>{
    return {
        type : "GET_DATA",
        payload :         
        axios({
            method : 'GET',
            url : 'http://localhost:3000/api/books?search=&page=1&limit=100&sort=0&by=title&order=title',
            headers: {
                Authorization : token,
            }
        })
    }
}
