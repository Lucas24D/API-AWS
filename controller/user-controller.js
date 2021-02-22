const AWS = require('aws-sdk')
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const validateEmail = require('../lib/validate-email')

function createUser (request) {
  const { email, name } = request.body

  const requiredParams = ['email', 'name']

  for ( const params of requiredParams) {
    if (!request.body[params]) {
      return ({
        error: `Missing parameter ${params}`
      })
    }
  }

  var params = {  
    TableName: 'users',  
    Item: {email, name} 
  }
  
  if (validateEmail(email))
    return dynamoDb.put(params).promise()
  return {error: "The email is not validate."} 
}

module.exports = createUser