require('dotenv').config();

const https = require('https');
const selfSigned = require('openssl-self-signed-certificate');
const { app } = require('./dist/server.js');
const fs = require('fs');

const HOST = process.env.HOST;
const PORT = process.env.PORT;

// для https нужно создать сертификаты
// https://medium.com/@nitinpatel_20236/how-to-create-an-https-server-on-localhost-using-express-366435d61f28
let key = fs.readFileSync('server/certificates/key.pem');
let cert = fs.readFileSync('server/certificates/cert.pem');
// если сертификатов в папке не обнаружено, то можно использовать самоподписывающиеся
if (!key || !cert) {
    key = selfSigned.key;
    cert = selfSigned.cert;
}

// т.к у ya-praktikum.tech куки https only, то и сервер должен быть https
https
    .createServer(
        {
            key: key,
            cert: cert,
        },
        app
    )
    .listen(PORT, () => {
        console.log('Application is started on ', `${HOST}:${PORT}`);
    });
