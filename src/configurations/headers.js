const encrypt = require('./encrypt');
const headers = {
  Authorization2: encrypt,
  Accept: 'application/json',
  'Content-type': 'application/json',
};
module.exports = headers;
