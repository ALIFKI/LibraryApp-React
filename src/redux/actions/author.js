import axios from 'axios'


export const getAuthor =(data)=>{
    return {
        type : "GET_AUTHOR",
        payload :       
        axios({
            method : 'GET',
            url : `${process.env.REACT_APP_URL_API}api/authors?search=&page=1&limit=10&sort=0&by=author`,
            headers : {
              Authorization : data.token
          },
        })
    }
}

export const deleteAuthor =(data)=>{
    return {
        type : "DELETE",
        payload :       
        axios({
            method : 'DELETE',
            url : `${process.env.REACT_APP_URL_API}api/authors/${data.id}`,
            headers : {
              Authorization : data.token
          },
        }),
        meta : data.id
    }
}

export const addAuthor = (data) =>{
    return {
        type : "ADD",
        payload : axios({
            method : "POST",
            url : `${process.env.REACT_APP_URL_API}api/authors`,
            headers : {
                Authorization : data.token
            },
            data : {
                author : data.author
            }
        }) 
    }
}

export const editAuthor = (data) =>{
    return {
        type : "EDIT",
        payload : axios({
            method : "PUT",
            url : `${process.env.REACT_APP_URL_API}api/authors/${data.id_author}`,
            headers : {
                Authorization : data.token
            },
            data : {
                author : data.author
            }
        }),
        meta : data 
    }
}