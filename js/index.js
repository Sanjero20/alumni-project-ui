const loginHTML = `
  <form action="" class="auth-form login" id="login-form">
    <legend>LOGIN</legend>

    <fieldset>
      <label for="username"> Username </label>
      <div class="inputs">
        <input type="text" name="username">
        <i class="fa-solid fa-circle-user"></i>
      </div>
    </fieldset>

    <fieldset>
      <label for="password"> Password </label>
      <div class="inputs">
        <input type="password" name="password" />
        <i class="fa-solid fa-lock"></i>
      </div>
    </fieldset>

    <button type="submit" class="login-btn">LOGIN</button>
    </form>

    <p class="new-account">
    Don't have an account?
    <span id="create-acc">Sign Up</span>
    </p>
`;

const signupHTML = `
  <form action="" class="auth-form signup" id="signupForm">
    <legend>SIGN UP</legend>

    <fieldset>
      <label for="username"> Username </label>
      <div class="inputs">
        <input type="text" name="username" id="username" />
        <i class="fa-solid fa-circle-user"></i>
      </div>
    </fieldset>

    <fieldset>
      <label for="email"> Email </label>
      <div class="inputs">
        <input
          type="text"
          name="email"
          id="email"
          autocomplete="off"
        />
        <i class="fa-solid fa-envelope"></i>
      </div>
    </fieldset>

    <fieldset>
      <label for="pass"> Password </label>
      <div class="inputs">
        <input type="password" name="password" id="pass" />
        <i class="fa-solid fa-lock"></i>
      </div>
    </fieldset>

    <fieldset>
      <label for="cpass"> Confirm Password </label>
      <div class="inputs">
        <input type="password" name="cpass" id="cpass" />
        <i class="fa-solid fa-lock"></i>
      </div>
    </fieldset>

    <button type="submit" class="signup-btn">SIGN UP</button>
  </form>

  <p class="have-account">
    Already have an account?
    <span id="login-acc">Log In</span>
  </p>
`;

const background = document.querySelector('.background');
const leftPart = document.querySelector('.left');
const rightPart = document.querySelector('.right');

leftPart.innerHTML = loginHTML;

// animate splash screen
setTimeout(() => {
  background.classList.add('show');
  setTimeout(() => {
    leftPart.classList.add('adjust');
    rightPart.classList.add('adjust');
  }, 300);
}, 750);

// switching animation
function switchForm(form) {
  leftPart.classList.toggle('switch');
  rightPart.classList.toggle('switch');

  // change contents of left part (contains the form)
  setTimeout(() => {
    leftPart.innerHTML = form;
  }, 100);
}

function defineLoginForm() {
  const signupBtnMenu = document.getElementById('create-acc');
  signupBtnMenu.addEventListener('click', () => {
    switchForm(signupHTML);
    setTimeout(() => {
      defineSignUpForm();
    }, 100);
  });
}

function defineSignUpForm() {
  const loginBtnMenu = document.getElementById('login-acc');
  loginBtnMenu.addEventListener('click', () => {
    switchForm(loginHTML);
    setTimeout(() => {
      defineLoginForm();
    }, 100);
  });
}

defineLoginForm();
