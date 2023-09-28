// Get the modal
let modal = document.getElementById('loginBlock');

function displayBlock(blockName) {
  document.getElementById(blockName).style.display='block'
}
function  removeBlock (blockName){
  document.getElementById(blockName).style.display='none'
}
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

//set max date of birth to the current date

let currentDate = new Date().toISOString().split("T")[0];
document.getElementById("birthday").setAttribute("max", currentDate);
//

function onSignIn(googleUser) {
  let profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
gapi.load('auth2', function() {
  gapi.auth2.init({
    client_id: 'YOUR_CLIENT_ID',
    // Other configuration options
    redirect_uri: 'http://localhost:63342/Survey.web/HTML/web/SrveyPage.html',
  });
});
