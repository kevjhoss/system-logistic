import {validateGmail, validatorPassword} from './validator.js'
import {togglePassword} from './password.js';
import {Icons} from './getIcon.js';

const sign_up = [
  {placeholder: 'Ingrese su nombre', name: 'name', type: 'text'},
  {placeholder: 'Ingrese su apellido', name: 'lastname', type: 'text'},
  {placeholder: 'Ingrese su numero de documento', name: 'dni', type: 'number'},
  {placeholder: 'Ingrese su Correo Electronico', name: 'email', type: 'text', call: validateGmail},
  {placeholder: 'Ingrese su contraseña...', name: 'password', type: 'password', call: validatorPassword, toggleIcon: togglePassword},
  {placeholder: 'Ingrese su numero', name: 'phone', type: 'tel'}
]

const login = [
  {placeholder: 'Ingrese su usuario...', name: 'name', type: 'text', call: validateGmail},
  {placeholder: 'Ingrese su contraseña...', name: 'password', type: 'password', call: validatorPassword, toggleIcon: togglePassword},
];

const createButton = (value = "") => {
  const button = document.createElement("button");
  button.type = "button";
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
  if (data.type === 'password') {
    const div = document.createElement("div");
    const input = createInput(data);
    const span = document.createElement("span");
    span.classList.add("message-error");
    const xmlns = "http://www.w3.org/2000/svg";
    const svgElem = document.createElementNS(xmlns, "svg");
    svgElem.setAttributeNS(null, "viewBox", "0 0 448 512");
    svgElem.setAttributeNS(null, "width", '2em');
    svgElem.setAttributeNS(null, "height", '2em');
    svgElem.innerHTML = Icons('password');
    const button = createButton();
    button.id = "toggle-password";
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="2em" height="2em"><path fill="hsl(0,0%,100%)" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"></path></svg>`;
    button.addEventListener("click", () => data.toggleIcon(button, input));
    div.appendChild(svgElem);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(button);
    return div;
  }
  const div = document.createElement("div");
  const input = createInput(data);
  const span = document.createElement("span");
  span.classList.add("message-error");
  const xmlns = "http://www.w3.org/2000/svg";
  const svgElem = document.createElementNS(xmlns, "svg");
  svgElem.setAttributeNS(null, "viewBox", "0 0 448 512");
  svgElem.setAttributeNS(null, "width", '2em');
  svgElem.setAttributeNS(null, "height", '2em');
  svgElem.innerHTML = `<path fill="hsl(0,0%,100%)" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>`;
  div.appendChild(svgElem);
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
  const button = createButton("Crear Cuenta");
  parent.appendChild(button);
}

const changeLogin = (parent) => {
  parent.innerHTML = '';
  for (const data of login) {
    const input = createContent(data);
    parent.appendChild(input);
  }
  const button = createButton("Ingresar");
  parent.appendChild(button);
}

export {
  changeLogin,
  changeSignUp
}
