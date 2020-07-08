import axios from 'axios'

export const login = data => {
    return {
        type : 'LOGIN',
        payload :
        axios({
            method: 'POST',
            url : `${process.env.REACT_APP_URL_API}api/users/login`,
            data : {
                email : data.username,
                password : data.password
            }
        }),
    }
}

export const logout = () => {
    return {
        type : "LOGOUT"
    }
}

export const register = data =>{
    return {
        type : 'REGISTER',
        payload : 
        axios({
            method: 'POST',
            url : `${process.env.REACT_APP_URL_API}api/users/registers`,
            data : {
                name : data.name,
                email : data.email,
                password : data.password,
                role : 2
            }
        })
    }
}