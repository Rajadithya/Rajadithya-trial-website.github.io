$(document).ready(function(){
  alert('Hello World')});

$(".login-btn").click(function(){
alert('Hello Worlds')

  var firebaseConfig = {
    apiKey: "AIzaSyAGt0RdAXqs9pi6-H2pMzy_SIq8CF4OQFY",
    authDomain: "trialcasesdatabase.firebaseapp.com",
    databaseURL: "https://trialcasesdatabase.firebaseio.com",
    projectId: "trialcasesdatabase",
    storageBucket: "trialcasesdatabase.appspot.com",
    messagingSenderId: "516787338667",
    appId: "1:516787338667:web:f40be2dbaf56671910a6ee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   var rootRef = firebase.database().ref("trialcasesdatabase");
   var root = firebase.database().ref("https://trialcasesdatabase.firebaseio.com");
  rootRef.child('first').set('Ada');
  root.child('last').set('Ada');
$("h1").append('1')
});
