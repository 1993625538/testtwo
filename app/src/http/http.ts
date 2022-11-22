import axios from "axios";

const axios_ins = axios.create({
    // API 请求的默认前缀
    baseURL: '/api',
    timeout: 2000 // 请求超时时间
})

export default axios_ins