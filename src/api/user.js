//导入request.js请求工具
import request from '@/utils/request.js'

//提供调用注册接口的函数
export const userRegisterService = (registerData)=>{
    //借助于UrlSearchParams对象将数据转为查询字符串
    const params = new URLSearchParams()
    for (let key in registerData){
        params.append(key,registerData[key])
    }
    return request.post('/user/register',params)
}