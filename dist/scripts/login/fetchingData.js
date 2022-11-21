import {createAlert} from './alert.js';
const main = document.querySelector("main");

const sendInfo = async e => {
  e.preventDefault();
  const form = new FormData(e.target);

  if (form.get("password") !== "" && form.get("user") !== "") {
    const message = (status,str) => main.appendChild(createAlert(status,str));
    const elementAlert = document.querySelector(".alert");
    if (elementAlert !== null) main.removeChild(elementAlert);
    const datas = await fetch("index.php?controller=Login&action=login", {
      method: 'POST',
      body: form
    });
    const {status} = await datas.json();
    if (status === "error-email") return message(status,"Email incorrecto");
    if (status === "error-password") return message(status,"Contrasena incorrecta");
    message(status,"Usuario Verificado");
    setTimeout(() => window.location = 'index.php?controller=User&action=index', 1000);
  }
}

export {
  sendInfo
}
