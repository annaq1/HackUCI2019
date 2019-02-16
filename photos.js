// Initialize Firebase
var config = {
    apiKey: "AIzaSyDVRuv3f6gwgbuZPNqOe0EcqSWCbFLRvt0",
    authDomain: "hackuci2019.firebaseapp.com",
    databaseURL: "https://hackuci2019.firebaseio.com",
    projectId: "hackuci2019",
    storageBucket: "hackuci2019.appspot.com",
    messagingSenderId: "586691294211"
  };
  firebase.initializeApp(config);
  var storage = firebase.storage();
  var storageRef = storage.ref();
  var imageRef = storageRef.child('_MG_7089.JPG');
  // First we sign in the user anonymously
firebase.auth().signInAnonymously().then(function() {
// Once the sign in completed, we get the download URL of the image
imageRef.getDownloadURL().then(function(url)                             {
// Once we have the download URL, we set it to our img element
document.querySelector('img').src = url;
}).catch(function(error) {
// If anything goes wrong while getting the download URL, log the error
console.error(error);
});
});