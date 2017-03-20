'use strict';

const request = require('request');

exports.fetchAccessToken = new Promise((resolve, reject) => {
  const mpConfig = configs.mp;

  const options = {
    uri: '/cgi-bin/token',
    baseUrl: 'https://api.weixin.qq.com',
    method: 'GET',
    qs: {
      appid: mpConfig.appID,
      secret: mpConfig.appSecret,
      grant_type: 'client_credential',
    },
  };

  const req = request(options, (error, response, body)=>{
    if (error) {
      return reject(error);
    }

    resolve(parseAccessToken(body));
  });
});

const parseAccessToken = body => JSON.parse(body).access_token;
