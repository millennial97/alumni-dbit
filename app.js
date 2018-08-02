const nodemailer = require("nodemailer");
const admin = require('firebase-admin');
const CronJob = require("cron").CronJob;

var serviceAccount = require("C:\\Users\\dbita\\Downloads\\alumni-db-94ff2-firebase-adminsdk-pzotv-d2e0852b49.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://alumni-db-94ff2.firebaseio.com"
});

var db = admin.firestore();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alumniofdbit@gmail.com',
    pass: 'dbitdbit'
  }
});

const mailOptions = {
  from: 'alumniofdbit@gmail.com',
  to: 'dbitalumni@outlook.com',
  subject: 'A pleasant Wish from DBIT',
  html: '<p>Many Many HAppy Returns of the Day..Happy Birthday Dear Alumni.</p>'
}

var cronJob = new CronJob('0 */1 * * * *', function () {
  console.log("running cron...");
  execute();
}, function () {
  console.log("Stopped running cron job.");
}, true );

var execute = function () {
  var date = new Date().toLocaleDateString("en-US", {
    year:"2-digit", month:"2-digit", day: "2-digit"
  });
  var today = date.substr(0,2) + '-' + date.substr(3,2);
  console.log(today);

  // var dbRef = db.collection('alumni').doc('students').collection('EE');
  // var query = dbRef.where('dob', '==', today).get()
  //   .then(function (snapshot) {
  //     snapshot.forEach(function (doc) {
  //       console.log(doc.id, '=>', doc.data());
  //       const mailOptions = {
  //         from: 'alumniofdbit@gmail.com',
  //         to: doc.data().email,
  //         subject: 'A Warm Wish from UR DBIT',
  //         html: '<p><b><font face="verdana" color="green" size="26">Good Evening to all ARMS.</font></p>'
  //       }
  //       transporter.sendMail(mailOptions, function (err, info) {
  //         if (err)
  //           console.log(err);
  //         else
  //           console.log(info);
  //       });
  //     });
  //   })
  //   .catch(function (err) {
  //     console.log('Error getting documents', err);
  //   });

    var dbRef = db.collection('alumni').doc('students').collection('CSE');
    var query = dbRef.where('dob', '==', today).get()
      .then(function (snapshot) {
        snapshot.forEach(function (doc) {
          console.log(doc.id, '=>', doc.data());
          const mailOptions = {
            from: 'alumniofdbit@gmail.com',
            to: doc.data().email,
            subject: 'A Warm Wish from UR DBIT',
            html: 'Embedded image: <img src="cid:unique@kreata.ee"/>',
            attachments: [{
              filename: 'invitation.jpg',
              path: '/invitation.jpg',
              cid: 'unique@kreata.ee' //same cid value as in the html img src
          }]
          }
          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log(err);
            else
              console.log(info);
          });
        });
      })
      .catch(function (err) {
        console.log('Error getting documents', err);
      });

      var dbRef = db.collection('alumni').doc('students').collection('IS');
    var query = dbRef.where('dob', '==', today).get()
      .then(function (snapshot) {
        snapshot.forEach(function (doc) {
          console.log(doc.id, '=>', doc.data());
          const mailOptions = {
            from: 'alumniofdbit@gmail.com',
            to: doc.data().email,
            subject: 'A Warm Wish from UR DBIT',
            html: 'Welcome to Alumni of DBIT',
            attachments: [{
              filename: 'invitation.jpg',
              path: 'C:\\Users\\dbita\\Desktop\\node-alumni\\invitation.jpg',
              cid: 'unique@kreata.ee' //same cid value as in the html img src
          },
          {
            filename: 'invitation2.jpg',
            path: 'C:\\Users\\dbita\\Desktop\\node-alumni\\invitation2.jpg',
            cid: 'unique@kreata.ee' //same cid value as in the html img src
        }]
          }
          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log(err);
            else
              console.log(info);
          });
        });
      })
      .catch(function (err) {
        console.log('Error getting documents', err);
      });

      var dbRef = db.collection('alumni').doc('students').collection('CVE');
    var query = dbRef.where('dob', '==', today).get()
      .then(function (snapshot) {
        snapshot.forEach(function (doc) {
          console.log(doc.id, '=>', doc.data());
          const mailOptions = {
            from: 'alumniofdbit@gmail.com',
            to: doc.data().email,
            subject: 'A Warm Wish from UR DBIT',
            html: '<p><b><font face="verdana" color="green" size="26">Good Evening to all ARMS.</font></p>'
          }
          transporter.sendMail(mailOptions, function (err, info) {
            if (err)
              console.log(err);
            else
              console.log(info);
          });
        });
      })
      .catch(function (err) {
        console.log('Error getting documents', err);
      });
};

