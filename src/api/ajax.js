/*
ajax请求模块
返回值：promise  异步返回数据为response.data
*/ 

import axios from 'axios'
export default function ajax(url,data={},type='GET'){
  return new Promise(function(resolve,reject){

    let promise;
    
    if(type === 'GET') //get请求
    {
      let dataStr = '';  //拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      })
      if(dataStr !== '')
      {
        dataStr = dataStr.substring(0,lastIndexOf('&'))  // 去掉结尾的&
        url = url + '?' + data;
      }
      promise = axios.get(url);
    }
    else{ // post请求
      promise = axios.post(url,data);
    }

    promise.then(function(response){
      resolve(response.data)   //返回值为data而不是respose
    }).catch(function(error){
      reject(error)
    })

  })
}