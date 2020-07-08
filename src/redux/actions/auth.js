import axios from 'axios'

export const login = data => {
    return {
        type : 'LOGIN',
        payload :
        axios({
            method: 'POST',
            url : 'http://localhost:3000/api/users/login',
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
            url : 'http://localhost:3000/api/users/registers',
            data : {
                name : data.name,
                email : data.email,
                password : data.password,
                role : 2
            }
        })
    }
}