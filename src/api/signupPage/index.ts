import {ISignupData} from "../../types/ISignupData";
import {ApiPath} from "src/constants/ApiPath";
import Api from "../../utils/Api";

export const signup = async (data: ISignupData) => {
    return Api.post({
        url: ApiPath.AUTH_SIGNUP,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
        data: data
    })
}
