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


// generate random number (1-5)
  var totalnum = 41;
  var oldIndexes = []; // holds indexes
  var imageindex = Math.floor((Math.random() * totalnum) + 1);
  oldIndexes.push(imageindex);

  var imageRef = storageRef.child(imageindex + '.jpg');
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
/////////////////////////////////////////////////////


function newRandomImage()
{
  if (oldIndexes.length == totalnum)
  {
    oldIndexes = [];
  }
  var newIndex = Math.floor((Math.random() * totalnum) + 1);
  while (oldIndexes.includes(newIndex))
  {
    newIndex = Math.floor((Math.random() * totalnum) + 1);
  }
  oldIndexes.push(newIndex);
  imageRef = storageRef.child(newIndex + '.jpg');
  firebase.auth().signInAnonymously().then(function() {
  imageRef.getDownloadURL().then(function(url)                             
  {
    document.querySelector('img').src = url;
  }).catch(function(error) {
  console.error(error);
  });
  });
}

function playsingle()
{
  var audio = document.getElementById("single4lyfe");
  audio.play();
}

function playnice()
{
  var audio = document.getElementById("nice");
  audio.play();
}


function playletsgo()
{
  var audio = document.getElementById("letsgo");
  audio.play();
}




