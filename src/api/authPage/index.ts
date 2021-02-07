import {ApiPath} from "src/constants/ApiPath";
import {ILoginData} from "../../types/ILoginData";
import Api from "src/utils/Api";

export const login = async (data: ILoginData) => {
    return Api.post({
        url: ApiPath.AUTH_SIGNIN,
        data: data,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' }
    })
}

export const logout = async () => {
    return Api.post({
        url: ApiPath.AUTH_LOGOUT,
        data: {},
        withCredentials: true,
        /*
             Есть вопрос - что будет, если куки не обнулять?
             Просто оно и без этого хидера работает
        */
        headers: {'Set-Cookie': 'expires=0'}
    })
}

export const user = async () => {
    return Api.get({
        url: ApiPath.AUTH_USER,
        withCredentials: true
    })
}
