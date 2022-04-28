var admin = require("firebase-admin");
var serviceAccount = require("./service_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://APP_ID-default-rtdb.firebaseio.com"
});

const firestore = admin.firestore();
const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "files");

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("An error occurred while scan file: " + err);
  }

  files.forEach(function (file) {
    var data = require("./files/" + file);

    firestore
      .collection('app')
      .doc('users')
      .set(data)
      .then(() => {
        console.log("Upload completed");
      })
      .catch((error) => {
        console.error("An error occurred while upload: ", error);
      });
  });
});