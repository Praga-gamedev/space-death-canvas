import axios from "axios";
import Url, {ApiPath} from "src/constants/Url";
import {UserProps} from "src/types/UserProps";
import {LoginData} from "src/types/LoginData";
import {SignupData} from "src/types/SignupData";

export const login = async (data: LoginData) => {
    try{
        return await axios.post(
            Url.buildFullApiUrl(ApiPath.AUTH_SIGNIN),
            JSON.stringify(data),
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            })
    } catch (error) {
        console.log(error)
        //TODO: добавить логику
    }
}

export const logout = async () => {
    try{
        return await axios.post(Url.buildFullApiUrl(ApiPath.AUTH_LOGOUT),
            {},{
            withCredentials: true,
            /*
             Есть вопрос - что будет, если куки не обнулять?
             Просто оно и без этого хидера работает
            */
            headers: {
                'Set-Cookie': 'expires=0'
            }
        })
    }catch(error){
        console.log(error)
        //TODO: добавить логику
    }
}

export const user = async () => {
    try{
        const response = await axios.get(
            Url.buildFullApiUrl(ApiPath.AUTH_USER),
            {
                withCredentials: true
            }
        )
        return response.data as UserProps
    }catch(error){
        console.log(error)
        //TODO: добавить логику
    }
}

export const signup = async (data: SignupData) => {
    try {
        return await axios.post(
            Url.buildFullApiUrl(ApiPath.AUTH_SIGNUP),
            JSON.stringify(data),
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' }
            })
    }catch (error) {
        console.log(error)
        //TODO: добавить логику
    }
}


