var firebaseConfig = {
      apiKey: "AIzaSyD02IqEy1zV7Mgq8RCcmLlWPQVdJXXB3fk",
      authDomain: "kwitter-726ee.firebaseapp.com",
      databaseURL: "https://kwitter-726ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-726ee",
      storageBucket: "kwitter-726ee.appspot.com",
      messagingSenderId: "134076752519",
      appId: "1:134076752519:web:73e4713411591cf28d4e22",
      measurementId: "G-768TCQSY87"
    };
   
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData()
    {
          firebase.database().ref("/").on('value',function (snapshot){
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function(childSnapshot){
                      childKey = childSnapshot.key;
                      Room_names = childKey;
                      console.log("Room Name - " + Room_names);
                      row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoom_name(this.id)'>#" + Room_names + "</div><hr>";
                      document.getElementById("output").innerHTML += row;
                      
                });
          });
    }


  getdata();  
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.loacation = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id) ' >#" + Room_names + "</div><hr>";
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
function logout()
{

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}