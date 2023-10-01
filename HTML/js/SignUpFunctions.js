

function validate(){
  let  validationField = document.getElementById('validation-txt');
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

function matchValidate(){
  let  validationField = document.getElementById('match-txt');
  let  password= document.getElementById('password');
  let  repeatedPassword= document.getElementById('psw-repeat');

  let passwordContent = password.value;
  let repeatedPasswordContent = repeatedPassword.value;

  console.log(passwordContent + repeatedPasswordContent)
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


