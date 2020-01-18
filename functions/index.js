/* const functions = require('firebase-functions');
const sendgrid = require('sendgrid')
const client = sendgrid(sendgrid.key)
const cors = require('cors')({ origin: true });
function parseBody(body) {
  var helper = sendgrid.mail;
  var fromEmail = new helper.Email(body.from);
  var toEmail = new helper.Email(body.to);
  var subject = body.subject;
  var content = new helper.Content('text/html', body.content);
  var mail = new helper.Mail(fromEmail, subject, toEmail, content);
  return  mail.toJSON();
}


exports.httpEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
  return Promise.resolve()
    .then(() => {
      if (req.method !== 'POST') {
        const error = new Error('Only POST requests are accepted');
        error.code = 405;
        throw error;
      }


      const request = client.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: parseBody(req.body)
      });

      return client.API(request)


    })
    .then((response) => {
      if (response.body) {
        res.send(response.body);
      } else {
        res.end();
      }
    })

    .catch((err) => {
      console.error('errrrrrr', err);
      return Promise.reject(err);
    });

  });
}) 
 */


const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const cors = require('cors')({ origin: true });

const SENDGRID_API_KEY = functions.config().sendgrid.key


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

exports.httpEmail = functions.https.onRequest((req, res) => {

    cors( req, res, () => { 

      
        const toEmail = req.body.email;
        const msg = {
         to: toEmail,
            from: 'devd95261@gmail.com',
            subject:  'Familiga : votre famille vous invite !  ',
            text: ` Cliquez sur ce lien`,
          // custom templates
          templateId: 'd-a605e1735b3c4ba59ae703aead265bc7',
             substitutionWrappers: ['{{', '}}'],
      
        };

        return sgMail.send(msg)
                
            .then(() => res.status(200).send({"message": "email sent!"}))
            .catch(err => res.status(400).send(err) )

        });

});