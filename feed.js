const ex = require("xlsx");
const admin = require('firebase-admin');
const functions = require('firebase-functions');

var serviceAccount = require('C:\\Users\\dbita\\Desktop\\node-alumni\\alumni-db-94ff2-firebase-adminsdk-pzotv-78f8020458.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
var input = ex.readFile('data5.xlsx');

console.log(input.Sheets.Sheet1);
var sheets = input.Sheets.Sheet1;
var sheets_json = ex.utils.sheet_to_json(sheets);
var docRef = db.collection('alumni').doc('students');

// sheets_json.forEach(sheet => {
//     var addStudent = docRef.collection(sheet.department).doc(sheet.facultyid).set({
//         bdate: sheet.dob,
//         contact: sheet.phone,
//         dob: sheet.dob,
//         email: sheet.email,
//         name: sheet.name
//     }).then(facultyid => {
//         console.log('Added faculty: ', sheet.facultyid);
//     }).catch(err => {
//         console.log(err);
//     });
// });

sheets_json.forEach(sheet => {

    console.log("-----------------------------------");
    console.log(sheet);

    var addStudent = docRef.collection('CVE').doc(sheet.usn).set({
        bdate: sheet.dob,
        contact: sheet.phone,
        dob: sheet.dob,
        email: sheet.email,
        name: sheet.name
    }).then(usn => {
        console.log('Added student: ', sheet.usn);
    }).catch(err => {
        console.log(err);
    });
});