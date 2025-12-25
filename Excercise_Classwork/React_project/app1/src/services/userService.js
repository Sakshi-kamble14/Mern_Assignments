import axios from 'axios'
import config from './config'

export async function loginUser(email,password){
    const URL=config.BASE_URL+'/user/signin'
    const body={email,password}

    const response=await axios.post(URL,body)
    return response.data
}

export async function registerUser(name,email,password) {
    const URL=config.BASE_URL+'/user/signup'
    const body={name,emai,password,mobile}
    const response=await axios.post(URL,body)
    return response.data
}
