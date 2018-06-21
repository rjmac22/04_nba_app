import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyA3JF_kAUUzbfgjzFtUoaN1LhL5JgeTjyg",
  authDomain: "nba-full-c2467.firebaseapp.com",
  databaseURL: "https://nba-full-c2467.firebaseio.com",
  projectId: "nba-full-c2467",
  storageBucket: "nba-full-c2467.appspot.com",
  messagingSenderId: "440671552354"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) =>{
  const data = [];
  snapshot.forEach((childSnapshot) => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    })
  });
  return data
}

export {
  firebase,
  firebaseDB,
  firebaseArticles,
  firebaseTeams,
  firebaseVideos,
  firebaseLooper
}