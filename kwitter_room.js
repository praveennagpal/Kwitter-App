
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDy8Ny-4tbms7suYtCgHTwQAatVqUZDiWI",
      authDomain: "kwitterapp-79bf3.firebaseapp.com",
      databaseURL: "https://kwitterapp-79bf3-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-79bf3",
      storageBucket: "kwitterapp-79bf3.appspot.com",
      messagingSenderId: "54173202130",
      appId: "1:54173202130:web:7c870376aaff48c16ddf0b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });});}
getData();

function redirectToRoomName(name) 
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

