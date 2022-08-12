
import axiosInstance from './axiosInstance'


export const getAllTwittes=(callback)=>{
    axiosInstance().post('/getAllTweet')
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
export const getAllTwittesByHashTag=(data,callback)=>{
    axiosInstance().post('/getAllTweet',data)
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
export const getAllTwittesByUser=(data,callback)=>{
    axiosInstance().post('/getAllTweet',data)
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
export const postNewTwitte=(data,callback)=>{
    axiosInstance().post('/newTweet',data)
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
export const getUsers=(callback)=>{
    axiosInstance().get('/getAllUser',)
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
export const getAllHashTags=(callback)=>{
    axiosInstance().get('/getAllHashTags')
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
export const likeTwitteReq=(id,callback)=>{
    axiosInstance().get(`/likeTweet/${id}`)
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