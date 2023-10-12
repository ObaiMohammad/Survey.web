

function checkIsValidPassword(){
  let  validationField = document.getElementById('password-massage');
  let  password= document.getElementById('password');

  let content = password.value;
  let  errors = [];
  if (content.length < 8) {
    errors.push("at least 8 characters");
  }

  // Check for at least one lower letter
    if (!/[a-z]/.test(content)) {
      errors.push("at least one lowercase letter.");
    }
  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(content)) {
    errors.push("at least one uppercase letter.");
  }
  if (content.search(/[0-9]/i) < 0) {
    errors.push("at least one digit.");

  }  if (content.search(/[!@#$%^&*()_+[\]{};:'"<>,.?/~\\-]/i) < 0) {
    errors.push("at least one special character. !@#$%^&*(){-};:'<_+>,.?");

  }  if (errors.length > 0) {
    // Create a list of errors with <li> elements
    const errorMassage = document.createElement('p');
    errorMassage.textContent = "Your password must contain:"
    const errorList = document.createElement('ul');

    errors.forEach((error) => {
      const listItem = document.createElement('li');
      listItem.textContent = error;
      errorList.appendChild(listItem);
    });

    // Clear previous errors and display the new error list
    validationField.innerHTML = '';
    validationField.appendChild(errorMassage);
    validationField.appendChild(errorList);

    return false;
  }

  // Clear previous errors
  validationField.innerHTML = '';
  return true;

}

function checkPasswordsMatch(){
  let  validationField = document.getElementById('match-password-massage');
  let  password= document.getElementById('password');
  let  repeatedPassword= document.getElementById('psw-repeat');

  let passwordContent = password.value;
  let repeatedPasswordContent = repeatedPassword.value;

  if (passwordContent === repeatedPasswordContent ){
    validationField.innerHTML = '';
    return true;
  }else {
    const errorMassage = document.createElement('p');
    errorMassage.textContent = "Your password does not match:"
    validationField.innerHTML = '';
    validationField.appendChild(errorMassage);
    return false;
  }
}


function viewPassword(inputId,iconId)
{
  let passwordInput = document.getElementById(inputId);
  let passStatus = document.getElementById(iconId);

  if (passwordInput.type === 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye-slash toggle-password-icon';

  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye toggle-password-icon';
  }
}



async function submitForm(event) {

  // Prevent the default form submission behavior so the user has to fill all the required inputs before submitting
  event.preventDefault();

  //Remove all error messages before resubmitting the form
  removeAllMassages();


  // Add your validation logic
  if ( await CheckIsValidUsername() && await checkIsValidEmail()&& checkIsValidPassword() && checkPasswordsMatch()  ) {
    try {
      const response = await addUser();
      // Call the redirectUser() function if addUser() is successful
      if (response.ok) {
        displayResponseMessage('Thank you for singing up',"sign-up-massage",'green')

        // time out so the user can read the massage should be modified later to remove the content of the form and display only the massage
        setTimeout(() => {
            redirectUser();
          }
          , 5000);

      }
    } catch (error) {
      console.error('An error occurred:', error);
      displayResponseMessage('An error occurred during registration2. ' + error,'"sign-up-massage"','red');
    }
  }
}

  function addUser() {
    let NewUser = logUserInput();
    const apiUrl = 'http://localhost:8989/user';

    // Send the data to the API using the fetch API and return a Promise
     return  fetch(apiUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(NewUser)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response;
      });
  }
function logUserInput() {
  let user = {
    "firstName": "",
    "lastName": "",
    "username": "",
    "password": "",
    "email": "",
    "birthday": "",
    "userSurveys": []
  }

  user.firstName = document.getElementById("first-name").value;
  user.lastName = document.getElementById("last-name").value;
  user.birthday = document.getElementById("birthday").value;
  user.username = document.getElementById("username").value;
  user.email = document.getElementById("email").value;
  user.password = document.getElementById("password").value;

  return user;

}



async function CheckIsValidUsername(){
  let username = document.getElementById("username").value;
  const apiUrl = 'http://localhost:8989/user/validate/username/'+username ;

  try{
    const response =  await fetch(apiUrl, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })

    const responseData = await response.json()
    console.log(responseData +" =json");
    // console.log(await response.text()+ " =text()");
    console.log(( responseData === false) +" =json == false");
    // console.log(( await response.text() === false)+ " =text == false");
    if ( responseData === false){
      displayResponseMessage("This username already exist please choose another one!",'username-massage','red')
      return false;
    }
    return true;

  }catch (error){
    console.error('An error occurred:', error);
  }

}
async function checkIsValidEmail() {
  let email = document.getElementById("email").value;
  // Regular expression pattern for a more permissive email format validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the pattern
  let validPattern =  emailPattern.test(email);
   if (validPattern){
    return  await isEmailRegistered(email)
   }else {
     displayResponseMessage("This is not a valid email address!",'email-massage','red')
     return false;
   }
}

async function isEmailRegistered(email) {
  const apiUrl = 'http://localhost:8989/user/validate/email/'+email ;
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });

  if (response.status === 200) {
    // Email is available, you can proceed with registration
    return true;
  } else if (response.status === 409) {
    // Email is already registered, display a message to the user
    const errorMessage = await response.text();
    displayResponseMessage("This email already exist please sign in!",'email-massage','red')
    setTimeout(() => {
        redirectUser();
      }
      , 5000);
    return false;

  } else {
    // Handle other response status codes if needed
    displayResponseMessage('Unexpected response status:'+response.status,'sign-up-massage','red')
    return false;
  }
}
function displayResponseMessage(responseMassage , parentID, massageColor) {
  const massageParent = document.getElementById(parentID);

  const massage = document.createElement("p");
  massage.textContent = responseMassage;
  massage.style.fontSize = "18";
  massage.style.fontWeight = "bold";
  massage.style.color = massageColor;

  massageParent.appendChild(massage);
}

function removeAllMassages(){
  document.getElementById("sign-up-massage").innerHTML ='';
  document.getElementById("username-massage").innerHTML ='';
  document.getElementById("email-massage").innerHTML ='';
  // password error massages
  document.getElementById('password-massage').innerHTML = '';
  document.getElementById('match-password-massage').innerHTML = '';
}

function redirectUser() {
  // in cas of different URL however in this webSite we can call removeBlock('SignUpBlock')" function
  // window.location.href = 'http://localhost:63342/Survey.web/HTML/view/HomePage.html'

  removeBlock('SignUpBlock');
}
function displayBlock(blockName) {
  document.getElementById(blockName).style.display='block'
}
function  removeBlock (blockName){
  document.getElementById(blockName).style.display='none'
}
// When the user clicks anywhere outside the modal, close it
// window.onclick = function(event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//   }
// }

