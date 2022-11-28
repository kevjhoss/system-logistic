import {changeLogin, changeSignUp} from './toggleLogin.js';
import {sendInfoLogin} from './fetchingData.js';
import {el} from './createElement.js';

//llamando a la funcion changeLogin() para renderizar el login inicial
changeLogin();

const form = el(".form-login");
form.addEventListener("submit", sendInfoLogin);

const btnSignUp = el("#sign-up");
const btnLogin = el('#login');

/*
  encapsulando las funciones importadas {changeLogin(), changeSignUp()} para agregar y remover los eventos
  asignados a los botones {btnSignUp, btnLogin}
*/
const login = () => {
  changeLogin();
  btnLogin.classList.add("active");
  btnSignUp.classList.remove("active");
  btnSignUp.addEventListener("click", signUp);
  btnLogin.removeEventListener("click", login);
}

const signUp = () => {
  changeSignUp();
  btnSignUp.classList.add("active");
  btnLogin.classList.remove("active");
  btnLogin.addEventListener("click", login);
  btnSignUp.removeEventListener("click", signUp);
}

btnSignUp.addEventListener("click", signUp);
