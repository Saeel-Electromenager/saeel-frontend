module.exports = function axiosConfig(method, url, body) {
  const encrypt = require('./encrypt');
  const token = localStorage.getItem('token');

  let headers = {
    Authorization2: encrypt,
    Accept: 'application/json',
    'Content-type': 'application/json',
  };

  if (token) headers = { ...headers, Authorization: token };

  let axiosConfig = {
    method: method,
    url: url,
    headers: headers,
  };
  if (!method.toLowerCase() !== 'get' && !!body)
    axiosConfig = { ...axiosConfig, data: body };
  return axiosConfig;
};
