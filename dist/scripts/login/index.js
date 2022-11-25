import {togglePassword} from "./togglePassword.js";
import {validateGmail, validatorPassword} from './validator.js';
import {changeLogin, changeSignUp} from './toggleLogin.js';

const el = tag => document.querySelector(tag);

const button = el("#toggle-password");
const inputGmail = el("input[name=user]");
const inputPassword = el("input[name=password]");
button.addEventListener("click", () => togglePassword(button, inputPassword));
inputGmail.addEventListener("keyup", validateGmail);
inputPassword.addEventListener("keyup", validatorPassword);

const form = el(".form-login");

const signUp = el("#sign-up");
const login = el('#login');

const changeLo = () => {
  changeLogin(form);
  signUp.classList.toggle("active");
  login.classList.toggle("active");
  signUp.addEventListener("click", changeUp);
  login.removeEventListener("click", changeLo);
}

const changeUp = () => {
  changeSignUp(form);
  signUp.classList.toggle("active");
  login.classList.toggle("active");
  login.addEventListener("click", changeLo);
  signUp.removeEventListener("click", changeUp);
}

signUp.addEventListener("click", changeUp);
