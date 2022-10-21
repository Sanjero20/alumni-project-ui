// Input Fields
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('cpass');

// Error messages tags
const userError = document.querySelector('.user-msg');
const emailError = document.querySelector('.email-msg');
const passError = document.querySelector('.pass-msg');
const cpassError = document.querySelector('.cpass-msg');

function ifEmpty(inputField, errorField) {
  if (inputField.value.trim() == '') {
    errorField.textContent = '* Must not be empty';
  } else {
    errorField.textContent = '';
  }
}

username.addEventListener('input', e => {
  ifEmpty(username, userError);
});

email.addEventListener('input', e => {
  if (email.validity.typeMismatch) {
    emailError.textContent = '* Must be a valid email address';
  } else {
    emailError.textContent = '';
  }
});

password.addEventListener('input', () => {
  validatePassword();
});

confirmPassword.addEventListener('input', e => {
  if (confirmPassword.value != password.value) {
    cpassError.textContent = '* Password does not match';
  } else {
    cpassError.textContent = '';
  }
});

function checkPattern(value, pattern) {
  pattern = new RegExp(pattern);
  return pattern.test(value);
}

function validatePassword() {
  let passwordValue = password.value;
  let errorMsg = '';

  if (passwordValue) {
    // Check length
    if (passwordValue.length < 8) {
      errorMsg += '* Must contain atleast 8 characters\r\n';
    } else {
      errorMsg += '';
    }

    // Uppercase Validation
    let uppercase = '(?=.*[A-Z])';
    if (!checkPattern(passwordValue, uppercase)) {
      errorMsg += '* Must contain atleast 1 uppercase letter\r\n';
    } else {
      errorMsg += '';
    }

    // Lowercase Validation
    let lowercase = '(?=.*[a-z])';
    if (!checkPattern(passwordValue, lowercase)) {
      errorMsg += '* Must contain atleast 1 lowercase letter\r\n';
    } else {
      errorMsg += '';
    }

    // Number Validation
    let numberRegex = '(?=.*[0-9])';
    if (!checkPattern(passwordValue, numberRegex)) {
      errorMsg += '* Must contain atleast one number';
    } else {
      errorMsg += '';
    }

    passError.setAttribute('style', 'white-space: pre');
    passError.innerHTML = errorMsg;
  } else {
    passError.textContent = '';
  }
}

// TODO Check if all input is valid,
// If valid, proceed, else prompt errors
const signupFormInputs = document.querySelectorAll('#signup-form input');
