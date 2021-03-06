/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library
const webPush = require('web-push');

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/clBagZHYVGc:APA91bFCUPqF-ueVNLBTmbnI-XWpiywMAGzYR3BcTHqlZr4k-5xJtuJqQepho8GeWeWbUZguQy7YzVI3fDZpImIolohzhNoFGdVFVcfiFYasjNbif38v_tyhf9drAfIB3bE3XGpW8KrA",
    "expirationTime": null,
    "keys": {
        "p256dh": "BCnxbn1GPWLpFxtTtlQ3wyVKiU0LSQvShZ4mVaYbVOvfQSDJ3qRFpatNwwdNrVWzqGXII-xnVQbamc2ujv-OruM",
        "auth": "G1xt1_Hp89ZTaiphX1ru3A"
    }
};

// TODO 4.3a - include VAPID keys
const vapidPublicKey = 'BL3W2STkeLPjbP3NE3Xz9Ec0oBlvnHSHsaFWHXXTq_MD7JGdUsWf1AtXhhNu42ZFkgz2HMbWOL96LfyxdVeyQmk';
const vapidPrivateKey = 'Qdg2aVPpQ_eIg95KuXRop9YHk1Vi0IVlaUqfv8l4HLw';

const payload = 'Here is a payload!';

const options = {
    TTL: 60,

    // TODO 4.3b - add VAPID details
    vapidDetails: {
        subject: 'mailto: jean.christophe.vetter@gmail.com',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);