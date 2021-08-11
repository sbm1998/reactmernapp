import {
    CREATE_USER,
    SIGN_IN,
    SIGN_UP,
    FETCH_ALL
} from './index'

export const createUser=(payload)=>({
    type:CREATE_USER,
    payload,
})
export const signin=(payload)=>{
    localStorage.setItem("token",payload.token)
    localStorage.setItem("id",payload.result._id)
    return{
    type:SIGN_IN,
    payload,
    }
}

export const signup=(payload)=>({
    type:SIGN_UP,
    payload,
})

export const getusers=(payload)=>({
    type:FETCH_ALL,
    payload
  })



