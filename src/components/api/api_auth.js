
import axios from 'axios'
import axiosInstance from './axiosInstance'


export const loginApi=(user,callback)=>{
    axios.post('/login',user)
    .then(
        response=>{
            const data=response.data
            callback(true,data)
        }
    ).catch(
        err=>{
            console.log(err);
            callback(false,err)
        }
    )
}
export const registerApi=(user,callback)=>{
    axios.post('/register',user)
    .then(
        response=>{
            const data=response.data
            callback(true,data) 
        }
    ).catch(
        err=>{
            console.log(err);
            callback(false,err)
        }
    )
}
export const uploadAvatar=(photo,callback)=>{
    axiosInstance().post('/uploadUserPhoto',photo)
    .then(
        response=>{
            const data=response.data
            callback(true,data)
        }
    ).catch(
        err=>{
            callback(false,err)
        }
    )
}
export const getProfile=(callback)=>{
    axiosInstance().get('/getProfile')
    .then(
        response=>{
            const data=response.data
            callback(true,data)
        }
    ).catch(
        err=>{
            callback(false,err)
        }
    )
}