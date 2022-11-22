import axios_ins from '../http/http'
export function loginApi(paras:object){
    return axios_ins({
        url:"auth/login",
        method:"post",
        data:paras,
    })
}