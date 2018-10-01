const admin = require('firebase-admin')
const key = require('../m33-yokoso-firebase-admin-sdk.json')

module.exports = admin.initializeApp({
  credential: admin.credential.cert(key),
  databaseURL: `https://${key.project_id}.firebaseio.com`
})
