const firebase = require('firebase');
const prompt = require('prompt');
require('dotenv').config();

// Initialize Firebase App.
firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
});

// Start and setup prompt.
prompt.start();
prompt.get(
  {
    properties: {
      email: {
        required: true,
      },
      password: {
        required: true,
        hidden: true,
      },
    },
  },
  function(err, result) {
    let email = result.email;
    let password = result.password;

    // Authenticate user using email and password.
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        // Get the access token of the authenticated user.
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(token => {
            console.log(token);
          });
      })
      .catch(error => {
        console.error(error);
      });
  },
);
