const AWS = require('aws-sdk')
const sendMail = require('../providers')

const sendUserEmail = async(request, response) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient()

  const { email } = request.body.email

  const params = {
    TableName: 'users',
    Key: { email }
  }

  dynamoDB.get(params, function(err, data){
    if (err){
      return { success: false, message: err}
    } else {
      const { name, email } = data.Item

      await sendMail({name, email}, request.file)

      return {
        success: true,
        data
      }
    } 
  })
}

module.exports = sendUserEmail