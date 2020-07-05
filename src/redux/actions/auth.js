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