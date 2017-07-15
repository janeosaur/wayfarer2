// import * as firebase from 'firebase';
import firebase from 'firebase';

// Provided by the Firebase console
const config = {
  apiKey: "AIzaSyC0B5xvgu8X0OPljXMLPkOosmu_Z3YniRQ",
  authDomain: "wayfarer-b30ee.firebaseapp.com",
  databaseURL: "https://wayfarer-b30ee.firebaseio.com",
  projectId: "wayfarer-b30ee",
  storageBucket: "wayfarer-b30ee.appspot.com",
  messagingSenderId: "75800955303"
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This utility function will extract
//  the child objects into an array and place the key as 'id'
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, database, auth };
export { firebaseListToArray };
