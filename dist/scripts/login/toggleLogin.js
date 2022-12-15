import {el, createInput, createButton} from './createElement.js';
import {sendInfoLogin, sendInfoSignUp} from './fetchingData.js';
import {signUp, login} from './dataForm.js';

const changeSignUp = () => {
  const form = el(".form-login");
  form.innerHTML = '';
  for (const data of signUp) {
    const input = createInput(data);
    form.appendChild(input);
  }
  const button = createButton("submit", "Crear Cuenta");
  form.appendChild(button);
  form.removeEventListener("submit", sendInfoLogin);
  form.addEventListener("submit", sendInfoSignUp);
}

const changeLogin = () => {
  const form = el(".form-login");
  form.innerHTML = '';
  for (const data of login) {
    const input = createInput(data);
    form.appendChild(input);
  }
  const button = createButton("submit", "Ingresar");
  form.appendChild(button);
  form.removeEventListener("submit", sendInfoSignUp);
  form.addEventListener("submit", sendInfoLogin);
}

export {
  changeLogin,
  changeSignUp
}
