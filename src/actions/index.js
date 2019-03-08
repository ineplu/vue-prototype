import $ from 'jquery'
import * as types from './types'
import config from "@/config"
export const urlCall = (url, data, type = 'GET') => {
  return new Promise((resolve, reject) => {
    $.support.cors = true;
    $.ajax({
      type: type,
      async: true,
      crossDomain: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: url,
      // dataType: "json",
      data: data,
      success: function (data) {
        resolve(data)
      },
      error: function (request, status, error) {
        window.console.log(`code:${request.status}message:${request.responseText}error:${error}`);
        let data = {
          result: false,
          error_desc: `code:${request.status}message:${request.responseText}error:${error}`
        }
        reject(data)
      }
    });
  })
}

export const getHeader = ({ commit, state }, param) => {
  urlCall(config.getHeaderUrl, param).then((data) => {
    // console.log(data.content)
    state.htmlHeader = data.content.replace(/<div>|<\/div>|<div align="center">/gi, '')
    commit(types.SET_HEADER)
  });
}