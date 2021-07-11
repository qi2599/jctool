// ajax 请求函数模块
import axios from 'axios'
// 自动切换环境
if (process.env.NODE_ENV == 'development'){
  axios.defaults.baseURL = 'http://test.gkshwap.com/wapback/app/';
} else if (process.env.NODE_ENV == 'debug'){
  axios.defaults.baseURL = 'http://test.gkshwap.com/wapback/app/';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://test.gkshwap.com/wapback/app/';
}
// 跨域发送cookie
axios.defaults.withCredentials=true
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 设置 GZIP 压缩请求头
let reqHeaders = {
  'Accept-Encoding': 'gzip, deflate'
}
//对外接口
export default function ajax(url='', data={}, method='POST'){
  if(method === 'GET'){
    return get(url, data);
  }else if(method === 'POST'){
    return post(url, data);
  }
}
// 封装get方法
function get(url, data){
  return new Promise((resolve, reject) =>{
    url = url + '?' + dataStr(data)
    axios.get(url,reqHeaders).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(err);
    })
  });
}
// 封装post方法
function post(url, data){
  return new Promise((resolve, reject) =>{
    data = dataStr(data)
    axios.post(url, data, reqHeaders).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(err);
    })
  });
}

// //添加响应拦截器
// axios.interceptors.response.use(function(response){
//   //对响应数据做些事
//   console.log(response);
//   return response;
// },function(error){
//   //请求错误时做些事
//   return Promise.reject(error);
// })
//
//添加请求拦截器
// axios.interceptors.request.use(function(config){
//   //在发送请求之前做某事
//   return config;
// },function(error){
//   //请求错误时做些事
//   return Promise.reject(error);
// })

//数据拼接字符串
function dataStr(data) {
  let str = ''
  Object.keys(data).forEach(key => {
    str += key + '=' + data[key] + '&'
  })
  if (str !== '') {
    str = str.substring(0, str.lastIndexOf('&'))
  }
  return str
}

// https://www.jianshu.com/p/0842ade7a4ac
