//YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyB6VTR7DICm8TuMjlESHhYnQLvo_BJK7Dg",
      authDomain: "kwitter-13ee0.firebaseapp.com",
      databaseURL: "https://kwitter-13ee0-default-rtdb.firebaseio.com",
      projectId: "kwitter-13ee0",
      storageBucket: "kwitter-13ee0.appspot.com",
      messagingSenderId: "36097163555",
      appId: "1:36097163555:web:455b621e453fa48f8a4c96",
      measurementId: "G-E648M98MRX"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send(){
      msg=document.getElementById("msg").value;
      user_name=localStorage.getItem("user_name");
      room_name=localStorage.getItem("room_name");
      console.log(msg);
      console.log(room_name);
      firebase.database().ref(room_name).push({
           name: user_name,
           message: msg,
           like: 0             
      });
      document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
