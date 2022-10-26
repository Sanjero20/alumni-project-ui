// import * as form from '/js/modules/formValidation';
import * as signup from './modules/signup-validation.js';

const background = document.querySelector('.background');

// Containers
const leftPart = document.querySelector('.left');
const rightPart = document.querySelector('.right');

// Forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Switch buttons
const newAccount = document.getElementById('create-acc');
const alreadyAcc = document.getElementById('login-acc');

// Input Fields
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const confirmPassword = document.getElementById('cpass');

// Buttons
const submitBtn = document.querySelector('.signup-btn');

// All fields
const formInputs = document.querySelectorAll('#signup-form input');
const formErrors = document.querySelectorAll('#signup-form .error');

// Event listeners
newAccount.addEventListener('click', switchToSignUp);
alreadyAcc.addEventListener('click', switchToLogin);

// Prevent foms from using form actions
loginForm.addEventListener('click', e => {
  e.preventDefault();
});

signupForm.addEventListener('click', e => {
  e.preventDefault();
});

// Validation event listener
username.addEventListener('input', signup.validateUsername);
email.addEventListener('input', signup.validateEmail);
password.addEventListener('input', signup.validatePassword);
confirmPassword.addEventListener('input', signup.checkPassword);

// Register account
submitBtn.addEventListener('click', signup.registerAccount);

// Functions
function switchToSignUp() {
  leftPart.classList.add('switch');
  rightPart.classList.add('switch');

  // change content
  setTimeout(() => {
    loginForm.classList.add('hide');
    signupForm.classList.remove('hide');
  }, 150);
}

function switchToLogin() {
  leftPart.classList.remove('switch');
  rightPart.classList.remove('switch');

  setTimeout(() => {
    loginForm.classList.remove('hide');
    signupForm.classList.add('hide');
  }, 150);
}

//* Driver code
//! Remove later
leftPart.classList.add('switch');
rightPart.classList.add('switch');
loginForm.classList.add('hide');
signupForm.classList.remove('hide');

// animate splash screen
setTimeout(() => {
  background.classList.add('show');
  setTimeout(() => {
    leftPart.classList.add('adjust');
    rightPart.classList.add('adjust');
  }, 300);
}, 750);

// TODO: Reset form everytime it switch forms
