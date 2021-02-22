const AWS = require('aws-sdk')

function getUsers (request) { // GET all users
  return new AWS.DynamoDB.DocumentClient()
    .scan({ TableName: 'users' })
    .promise()
    .then(response => response.Items)
}

module.exports = getUsers