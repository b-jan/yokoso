import * as firebase from 'firebase/app'
import 'firebase/auth';

var config = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
