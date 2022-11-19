import {togglePassword} from "./password.js";
import {validateGmail, validatorPassword} from './validator.js';
import {changeLogin, changeSignUp} from './changeLogin.js';

const el = tag => document.querySelector(tag);

const button = el("#toggle-password");
const inputGmail = el("input[name=user]");
const inputPassword = el("input[name=password]");
button.addEventListener("click", () => togglePassword(button, inputPassword));
inputGmail.addEventListener("keyup", validateGmail);
inputPassword.addEventListener("keyup", validatorPassword);

const form = el(".form-login");
form.addEventListener("submit", (e) => e.preventDefault());

const signUp = el("#sign-up");
const login = el('#login');

const changeLo = () => {
  changeLogin(form);
  signUp.addEventListener("click", changeUp);
  login.removeEventListener("click", changeLo);
}

const changeUp = () => {
  changeSignUp(form);
  login.addEventListener("click", changeLo);
  signUp.removeEventListener("click", changeUp);
}

signUp.addEventListener("click", changeUp);
