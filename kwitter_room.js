var firebaseConfig = {
      apiKey: "AIzaSyDOcimrYOxJ3BOeYch4OA_JGGmu6vNhezc",
      authDomain: "kwitter-89ad9.firebaseapp.com",
      databaseURL: "https://kwitter-89ad9-default-rtdb.firebaseio.com",
      projectId: "kwitter-89ad9",
      storageBucket: "kwitter-89ad9.appspot.com",
      messagingSenderId: "191618741573",
      appId: "1:191618741573:web:5ea206c0d6d8e9d5583a2c"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"

function addroom(){
room_name=document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
purpose:"Isabella is a good girl"
})
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" +Room_names);
row="<div class='roomname' id="+Room_names+" onclick='redirecttoromname(this.id)'> "+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoromname(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html"
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
}

function addroom(){
document.getElementById("addroom");
localStorage("addroom")
}
