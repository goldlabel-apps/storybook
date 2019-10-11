const functions = require('firebase-functions');

exports.storybook = functions.https.onRequest((request, response) => {
 response.send("Hello from Storybook");
});
