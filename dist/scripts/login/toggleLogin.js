import {validateGmail, validatorPassword} from './validator.js'
import {togglePassword} from './togglePassword.js';
import {Icons} from './Icons.js';
import {createSvg} from './createElement.js';
import {sendInfoLogin, sendInfoSign} from './fetchingData.js';

const sign_up = [
  {placeholder: 'Ingrese su Nombre Completo', name: 'fullName', type: 'text'},
  {placeholder: 'Ingrese su Numero de Documento', name: 'document-number', type: 'text'},
  {placeholder: 'Ingrese su Dirreccion', name: 'dirrection', type: 'text'},
  {placeholder: 'Ingrese su Localidad', name: 'location', type: 'text'},
  {placeholder: 'Ingrese su Provincia', name: 'province', type: 'text', },
  {placeholder: 'Ingrese su Codigo Postal', name: 'code-postal', type: 'text'},
  {placeholder: 'Ingrese su Telefono', name: 'phone', type: 'tel'},
  {placeholder: 'Ingrese su Correo Electronico', name: 'email', type: 'text', call: validateGmail},
  {placeholder: 'Ingrese su Contraseña', name: 'password', type: 'password', call: validatorPassword, toggleIcon: togglePassword},
]

const login = [
  {placeholder: 'Ingrese su usuario...', name: 'user', type: 'text', call: validateGmail},
  {placeholder: 'Ingrese su contraseña...', name: 'password', type: 'password', call: validatorPassword, toggleIcon: togglePassword},
];

const createButton = (value = "", type) => {
  const button = document.createElement("button");
  button.type = type;
  button.textContent = value;
  return button;
}

const createInput = (data) => {
  const input = document.createElement("input");
  input.placeholder = data.placeholder;
  input.name = data.name;
  input.type = data.type;
  input.autocomplete = "off";
  input.addEventListener("keyup", data.call);
  return input;
}

const createContent = (data) => {
  const div = document.createElement("div");
  const input = createInput(data);
  const span = document.createElement("span");
  span.classList.add("message-error");
  const svg = createSvg(448,512,2,2);
  svg.innerHTML = Icons(data.name);
  if (data.type === 'password') {
    const button = createButton();
    button.id = "toggle-password";
    button.type = "button";
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="2em" height="2em"><path fill="hsl(0,0%,100%)" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"></path></svg>`;
    button.addEventListener("click", () => data.toggleIcon(button, input));
    div.appendChild(svg);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(button);
    return div;
  }
  div.appendChild(svg);
  div.appendChild(input);
  div.appendChild(span);
  return div;
}

const changeSignUp = (parent) => {
  parent.innerHTML = '';
  for (const data of sign_up) {
    const input = createContent(data);
    parent.appendChild(input);
  }
  const button = createButton("Crear Cuenta", "submit");
  parent.appendChild(button);
  parent.removeEventListener("submit", sendInfoLogin);
  parent.addEventListener("submit", sendInfoSign);
}

const changeLogin = (parent) => {
  parent.innerHTML = '';
  for (const data of login) {
    const input = createContent(data);
    parent.appendChild(input);
  }
  const button = createButton("Ingresar", "submit");
  parent.appendChild(button);
  parent.removeEventListener("submit", sendInfoSign);
  parent.addEventListener("submit", sendInfoLogin);
}

export {
  changeLogin,
  changeSignUp
}
