
const firebaseConfig = {
      apiKey: "AIzaSyBQPviQAwSHNzrEzefjAAtQ4tKxNipmADM",
      authDomain: "kwitter-adip.firebaseapp.com",
      databaseURL: "https://kwitter-adip-default-rtdb.firebaseio.com",
      projectId: "kwitter-adip",
      storageBucket: "kwitter-adip.appspot.com",
      messagingSenderId: "765587075524",
      appId: "1:765587075524:web:36fa66a06b881a5345f491"
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id="+ Room_names " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output");
      //End code
      });});}
getData();
