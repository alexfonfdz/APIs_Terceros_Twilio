require('dotenv').config()
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hola! Este es un mensaje del equipo 1 generado con twilio!!!',
    from: phoneNumber,
    to: '+526624206780'
  })
  .then(message => console.log('Mensaje enviado con exito', message.sid))
  .catch(error => console.log('Error al enviar el mensaje', error));