const functions = require("firebase-functions");

exports.api = functions.https.onRequest((request, response) => {
  response.send("Hello from storybook/firebase API");
});
