import {el, createAlert} from './createElement.js';

const notEmpety = (form) => {
  const state = [];
  for (const key of form.keys()) state.push(form.get(key));
  return state.every(value => value !== "");
};

const sendInfoLogin = async e => {
  e.preventDefault();
  const form = new FormData(e.target);

  if (notEmpety(form)) {
    const main = el("main");
    const message = (status,text) => main.appendChild(createAlert(status,text));
    const elementAlert = el(".alert");
    if (elementAlert !== null) main.removeChild(elementAlert);
    const datas = await fetch("index.php?controller=Login&action=login", {
      method: "POST",
      body: form
    });
    const {status} = await datas.json();
    if (status === "error-email") return message(status,"Email incorrecto");
    if (status === "error-password") return message(status,"Contraseña incorrecta");
    message(status,"Usuario Verificado");
    setTimeout(() => window.location = 'index.php?controller=User&action=index', 1000);
  }
};

const sendInfoSignUp = async e => {
  e.preventDefault();
  const form = new FormData(e.target);

  if (notEmpety(form)) {
    const main = el("main");
    const message = (status,text) => main.appendChild(createAlert(status,text));
    const elementAlert = el(".alert");
    if (elementAlert !== null) main.removeChild(elementAlert);
    const datas = await fetch("index.php?controller=Login&action=create", {
      method: "POST",
      body: form
    });
    const {status} = await datas.json();
    if (status === "success") {
      message(status, "Cuenta Creada Con Exito");
      setTimeout(() => window.location = 'index.php?controller=User&action=index', 1000);
    }
  }
};

export {
  sendInfoLogin,
  sendInfoSignUp
}
