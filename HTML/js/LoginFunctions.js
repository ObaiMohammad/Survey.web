// Get the modal
let modal = document.getElementById('loginBlock');

function displayLoginBlock() {
  document.getElementById('loginBlock').style.display='block'
}
function  removeLoginBlock (){
  document.getElementById('loginBlock').style.display='none'
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
