
export const ApiPath = Object.freeze({
    AUTH_SIGNUP:'/auth/signup',
    AUTH_SIGNIN:'/auth/signin',
    AUTH_USER:'/auth/user',
    AUTH_LOGOUT:'/auth/logout',
    USER_PROFILE:'/user/profile',
    USER_AVATAR:'/user/profile/avatar',
    USER_PASSWORD:'/user/password',
    USER_SEARCH:'/user/search'
})

export default class Url {
    static getHostUrl() {
        return 'https://ya-praktikum.tech'
    }

    static buildFullApiUrl(path: string) {
        return Url.getHostUrl() + '/api/v2' + path
    }
}
