import {create,createSvg, el, message, replace} from '../components/globalFunctions.js';
import {validateDni, validateCP, validatePhone, validateGmail, validateStandart, validatePassword} from '../components/validator.js';
import { Icons } from '../components/getIcons.js';
import {snipper} from '../components/Snipper.js';
import {renderLayout} from './createBox.js';

const validateBtn = () => {
  const status = [];
  const box = el("my-account").shadowRoot.childNodes[1];
  box.childNodes.forEach(el => {
    if (el.classList.contains("btn-action")) status.push(true);
  })
  if (status.length === 0) return true;
  return false;
};

const clearBtn = () => {
  const status = [];
  const box = el("my-account").shadowRoot.childNodes[1];
  box.childNodes.forEach(el => {
    if (el.classList.contains("btn-action")) status.push(el);
    if (el.nodeName === "LABEL") el.firstChild.checked = false;
    if (el.nodeName === "INPUT") el.disabled = true;
  })
  for (const state of status) {
    box.removeChild(state);
  }
  replace(snipper("snipper"), el("section"));
  return renderLayout();
}

const updateAccount = async (e) => {
  const form = new FormData(e.target.parentNode);
  form.append("id_cliente", localStorage.getItem("id_cliente"))
  const send = await fetch("index.php?controller=User&action=updateUser", {
    method: "POST",
    body: form
  });
  const value = await send.json();
  clearBtn();
  if (value.status == true) {
    message("success", "alert-success", "LOS CAMBIOS SE REALIZARON CON EXITO");
    replace(snipper("snipper"), el("section"));
    return renderLayout();
  }
  return message("error-empety", "alert-error", "ERROR AL ACTULIZAR CUENTA");
};

const append = (datas, content) => {
  return (key) => {
    const div = create("div");
    div.classList.add("input-value");
    const input = create("input");
    input.name = key;
    input.placeholder = key;
    input.value = datas[key];
    input.disabled = true;
    if (key == "numero_documento") {
      input.addEventListener("keyup", validateDni);
    }
    if (key == "codigo_postal") {
      input.addEventListener("keyup", validateCP);
    }
    if (key == "telefono") {
      input.addEventListener("keyup", validatePhone);
    }
    if (key == "correo_electronico") {
      input.addEventListener("keyup", validateGmail);
    }
    if (key == "password") {
      input.addEventListener("keyup", validatePassword);
    }

    if (key == "nombre_cliente" || key == "direccion" || key == "localidad" || key == "provincia") {
      input.addEventListener("keyup", validateStandart);
    }
    const span = create("span");
    span.textContent = "error";
    span.classList.add("message-error");
    const label = document.createElement("label");
    label.setAttribute("for", datas[key]);
    const svg = createSvg(512,512,2,2);
    svg.innerHTML = Icons("btn-edit");
    const btnEdit = create("input");
    btnEdit.id = datas[key];
    btnEdit.classList.add("btn-edit");
    btnEdit.type = "checkbox";
    btnEdit.addEventListener("click", () => {
      if (validateBtn()) {
        const div = input.parentNode.parentNode;
        const btnSave = create("button")
        btnSave.type = "button";
        btnSave.classList.add("btn-action", "is-save")
        btnSave.textContent = "Guardar cambios";
        btnSave.addEventListener("click", updateAccount);
        const btnCancel = create("button")
        btnCancel.classList.add("btn-action", "is-cancel")
        btnCancel.textContent = "Descartar cambios";
        btnCancel.addEventListener("click", clearBtn);
        div.appendChild(btnSave);
        div.appendChild(btnCancel);
      }
      if(input.disabled === true) return input.disabled = false;
      input.disabled = true;
    })
    label.appendChild(btnEdit);
    label.appendChild(svg)
    div.appendChild(input);
    div.appendChild(span);
    content.appendChild(div);
    content.appendChild(label);
  }
}

export class MiCuenta extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;
    const shadow = this.attachShadow({mode: "open"});
    const div = document.createElement("form");
    div.id = "box-account";
    const h2 = document.createElement("h2");
    h2.textContent = "MI CUENTA";
    const content = new DocumentFragment();
    const setValue = append(datas, content);
    setValue("nombre_cliente");
    setValue("numero_documento");
    setValue("direccion");
    setValue("localidad");
    setValue("provincia");
    setValue("codigo_postal");
    setValue("telefono");
    setValue("correo_electronico");
    setValue("password");
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/myaccount.css");
    shadow.appendChild(style);
    div.appendChild(h2);
    div.appendChild(content);
    shadow.appendChild(div);
  }
}
