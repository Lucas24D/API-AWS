const ApiBuilder = require('claudia-api-builder')
const api = new ApiBuilder()

const createUser = require('./controller/user-controller')
const getUsers = require('./controller/get-users')
//const sendUserEmail = require('./controller/send-user-email')

api.post('/user', createUser)
//api.get('/sendmail/{email}', sendUserEmail)

module.exports = api;
