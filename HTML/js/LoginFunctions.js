// document.addEventListener("submit",()=>{
//   let username = document.getElementById("uname").value;
//  let password = document.getElementById("psw").value;
//   login(username,password)
// } );


async function login(event) {
  event.preventDefault();

  // remove error massage before resubmit the form
  document.getElementById("login-massage").innerHTML ='';

  let username = document.getElementById("uname").value;
  let password = document.getElementById("psw").value;

  const apiUrl = 'http://localhost:8989/user/login/' + username + '/' + password;
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });
  if (response.status === 200) {
    window.location.href ='http://localhost:63342/Survey.web/HTML/view/UserHomePage.html'
    return true;
  } else if (response.status === 401) {
    // User Unauthorized
    displayResponseMessage("Wrong Password or Username", 'login-massage', 'red')
    return false;

  } else {
    // Handle other response status codes just for practice
    displayResponseMessage('Unexpected response status:' + response.status, 'login-massage', 'red')
  }
}


