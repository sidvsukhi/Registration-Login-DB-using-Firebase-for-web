firebase.auth().onAuthStateChanged(function(user) {
firebase.auth().signOut();
  if (user) {
    // User is signed in.

    var user = firebase.auth().currentUser;
    if(user != null){
      //alert(user.userName);
      window.location="file:///C:/Users/siddh/Desktop/tp/main/aroma/index.html";

      // var email_id = user.email;
      // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.
     //alert('WRONG');
//firebase.auth().signOut();
    // document.getElementById("user_div").style.display = "none";
    // document.getElementById("login_div").style.display = "block";

  }
});


  function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
    });
}