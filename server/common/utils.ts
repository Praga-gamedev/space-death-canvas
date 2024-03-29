import { Express } from 'express';
import * as https from 'https';
import * as fs from 'fs';
// @ts-ignore
import selfSigned from 'openssl-self-signed-certificate';

export const initHttpsServer = (app: Express) => {
    let key;
    let cert;

    try {
        key = fs.readFileSync('../certificates/key.pem');
        cert = fs.readFileSync('../certificates/cert.pem');
    } catch (e) {
        key = selfSigned.key;
        cert = selfSigned.cert;
    }

    return https.createServer(
        {
            key: key,
            cert: cert,
        },
        app
    );
};
