import axios from 'axios'


export const getGenre =(data)=>{
    return {
        type : "GET_GENRE",
        payload :       
        axios({
            method : 'GET',
            url : `${process.env.REACT_APP_URL_API}api/genres?search=&page=1&limit=10&sort=0&by=genre`,
            headers : {
              Authorization : data.token
          },
        })
    }
}

export const deleteGenre =(data)=>{
    return {
        type : "DELETE",
        payload :       
        axios({
            method : 'DELETE',
            url : `${process.env.REACT_APP_URL_API}api/genres/${data.id}`,
            headers : {
              Authorization : data.token
          },
        }),
        meta : data.id
    }
}

export const addGenre = (data) =>{
    return {
        type : "ADD",
        payload : axios({
            method : "POST",
            url : `${process.env.REACT_APP_URL_API}api/genres`,
            headers : {
                Authorization : data.token
            },
            data : {
                genre : data.genre
            }
        }) 
    }
}

export const editGenre = (data) =>{
    return {
        type : "EDIT",
        payload : axios({
            method : "PUT",
            url : `${process.env.REACT_APP_URL_API}api/genres/${data.id_genre}`,
            headers : {
                Authorization : data.token
            },
            data : {
                genre : data.genre
            }
        }),
        meta : data 
    }
}