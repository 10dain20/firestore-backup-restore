// In your index.js
const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Initiate Firebase App
// appName is optional, you can omit it.
const appName = '[DEFAULT]';
firestoreService.initializeApp(serviceAccount,  "https://ai-scratch-log.firebaseio.com", appName);

// Start exporting your data
firestoreService
  .backup('user_evaluations')
  .then((data) => console.log(JSON.stringify(data)));