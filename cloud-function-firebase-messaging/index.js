const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firestore);

const db = admin.firestore();
const fcm = admin.messaging();


exports.senddevices = functions.firestore.document('notification/{id}').onCreate(async snapshots=> {
    const name = snapshots.get('name');
    const subject = snapshots.get('subject');
    console.log(name+'  '+ subject);
    //const token = snapshots.get('token');
    const payload = {
        notification:{
            title: 'new message from test',
            body: 'this is body',
            badge: '1',
            sound: 'default'
        }
    }
    return fcm.sendToDevice('c3NmElZiSVWlMlikzoYjqi:APA91bEoYewcIJv1rx2EI-f9bhIeFieEbGpfQLwAUrwmi2iScu11qBDMIjrIgrrQcK5yMvgTTd8wyuy15Z2FP-SN_OoJvremhEjUUf0nRiLUKGeU1h_02w8rfQpDhPrI4ZcGuaTyYxaS',payload);

});