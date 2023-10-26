import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
}

export default {
  execReq(method, sendUrl, headers, data) {
    return new Promise((resolve, reject) => {
      axios[method](sendUrl, data, { headers })
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  post(baseUrl, api, data = {}, Usertoken = '') {
    let sendUrl = encodeURI(baseUrl + api);
    let headers = HEADERS;

    return this.execReq('post', sendUrl, headers, data);
  },
  get(baseUrl, api, param, Usertoken = '') {
    let sendUrl = encodeURI(baseUrl + api);
    if (param !== '') {
      sendUrl += '?' + param;      
    }
    let headers = HEADERS;

    return this.execReq('get', sendUrl, headers);
  }
}