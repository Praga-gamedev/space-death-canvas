import {SignupData} from "src/types/SignupData";
import axios from "axios";
import Url, {ApiPath} from "src/constants/Url";

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
