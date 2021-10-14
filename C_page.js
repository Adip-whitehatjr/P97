
const firebaseConfig = {
      apiKey: "AIzaSyBQPviQAwSHNzrEzefjAAtQ4tKxNipmADM",
      authDomain: "kwitter-adip.firebaseapp.com",
      databaseURL: "https://kwitter-adip-default-rtdb.firebaseio.com",
      projectId: "kwitter-adip",
      storageBucket: "kwitter-adip.appspot.com",
      messagingSenderId: "765587075524",
      appId: "1:765587075524:web:36fa66a06b881a5345f491"
    };

    const app = initializeApp(firebaseConfig);

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['Name'];
Message = message_data['Message'];
Like = message_data['Like'];
Name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
Message_with_tag = "<h4 class='message_h4'>" + Message + "</h4>";
Like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + Like + " onclick='updatelike(this.id)'>";
Span_with_tag =  "<span class='glyphicon glyphicon-thumbs-up'>Like: " + Like + "</span></button>";
Row = Name_with_tag + Message_with_tag + Like_button + Span_with_tag;
document.getElementById("output").innerHTML += Row;
//End code
     } });  }); }
getData();

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location = "kwitter.html"
}
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
           name:user_name, 
           message: msg,
           like: 0
     });
     document.getElementById("msg").value = "";
}

function updatelike(message_id) {
     console.log("liked on the like button-" + message_id);
     button_id = message_id;
     likes = document.getElementById("button_id").value;
     updated_like = Number(likes) + 1;
     console.log(updated_like);
     firebase.database().ref(room_name).child(message_id).update({
           like: updated_like
     });
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location.replace = "kwitter.html";
}