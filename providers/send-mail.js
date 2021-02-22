const AWS = require('aws-sdk')
const nodemailer = require('nodemailer')

const sendEmail = async (message) => {
  const transporter = nodemailer.createTransport({SES: new AWS.SES()})

  await transporter.sendEmail({
    to: {
      name: message.name,
      address: message.email
    },
    from: {
      name: 'your-name',
      address: 'youremail@yourmail.com'
    },
    subject: 'Subject',
    html: 'Hello World',
    attachments: {
      fileName: 'HelloWorld.pdf',
      path: __dirname + '/HelloWorld.pdf'
    }
  })
}

module.exports = sendEmail