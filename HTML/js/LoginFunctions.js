// Get the modal
let modal = document.getElementById('loginBlock');

function displayBlock(blockName) {
  document.getElementById(blockName).style.display='block'
}
function  removeBlock (blockName){
  document.getElementById(blockName).style.display='none'
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
