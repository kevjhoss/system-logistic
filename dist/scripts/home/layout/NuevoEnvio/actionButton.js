import { el, createButton, setItem, replace, message } from '../components/globalFunctions.js';
import { insertButtons } from './changeLayout.js';
import { Progress } from '../NuevoEnvio/components/progress.js';
import { snipper } from '../components/Snipper.js';
import { saveDetails } from './fetchingData.js';
import {getUserData} from '../fetchingData.js';

const loading = (content) => el("#box-envio").replaceChild(snipper("snipper-form"), el(content));

const changeProgress = (state) => el("section").replaceChild(new Progress(state), el("progress-barra"));

const elementExist = (content) => customElements.get(content) === undefined;

const replaceObject = (Obj, data) => {
  const form = el("#box-envio");
  if (data === null) return form.replaceChild(new Obj, el("form > section"));
  form.replaceChild(new Obj(data), el("form > section"));
}

const appendButton = () => {
  const btnCancel = createButton("button", "Cancelar");
  btnCancel.classList.add("btn--cancel", "btn-action--text");
  btnCancel.addEventListener("click", clearData);
  const btnPrev = createButton("button", "Atrás");
  btnPrev.classList.add("btn--action", "btn-action--text", "btn-prev--grid");
  btnPrev.addEventListener("click", actionPrev);
  el("#box-envio").insertBefore(btnPrev, el(".btn-next--grid"));
  el("#box-envio").insertBefore(btnCancel, el(".btn-next--grid"));
}

const removeButtons = () => {
  const form = el("#box-envio");
  while (el(".btn--box")) {
    form.removeChild(el(".btn--box"));
  }
  form.removeChild(el(".btn--cancel"));
  form.removeChild(el(".btn-prev--grid"));
}

const replaceButtons = (name) => { if (name === "next") { const btnNext = createButton("button", "Siguiente");
    btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    btnNext.addEventListener("click", actionNext);
    return el("#box-envio").replaceChild(btnNext, el(".btn-next--grid"));
  }
  if (name === "pay") {
    const btnPay = createButton("button", "Cotizar y Pagar");
    btnPay.textContent = "Cotizar y pagar";
    btnPay.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    btnPay.addEventListener("click", tst);
    return el("#box-envio").replaceChild(btnPay, el(".btn-next--grid"));
  }
}

const clearData = async () => {
  const { FormOrigin } = await import("./FormOrigin/createShadow.js");
  removeButtons();
  if (el("content-destiny") !== null) loading("content-destiny");
  if (el("content-shipment") !== null) loading("content-shipment");
  localStorage.clear();
  const data = await getUserData();
  setItem("id_cliente", data.id_cliente);
  setItem("email", data.correo_electronico);
  setItem("full-name", data.nombre_cliente);
  setItem("domicilio", "is-active");
  changeProgress("is-active-origen");
  replaceButtons("next");
  replaceObject(FormOrigin);
}

const actionPrev = async () => {
  if (el("content-destiny") !== null) {
    loading("content-destiny");
    const { FormOrigin } = await import('./FormOrigin/createShadow.js')
    replaceObject(FormOrigin);
    changeProgress("is-active-origen");
    return removeButtons();
  }

  if (el("content-shipment") !== null) {
    loading("content-shipment");
    const { FormDestiny } = await import("./FormDestiny/createShadow.js");
    const { formHomeDelivery } = await import("./FormDestiny/dataForm.js");
    replaceObject(FormDestiny, formHomeDelivery);
    changeProgress("is-active-destino");
    replaceButtons("next");
    insertButtons();
  }
}

const validateCampo = () => {
  const status = [];
  let root;
  el("#box-envio").childNodes.forEach(el => {
    if (el.nodeName.includes("CONTENT")) root = el;
  });
  const div = root.shadowRoot.childNodes[1];
  div.childNodes.forEach(el => {
    if (el.nodeName === "DIV") status.push(el.childNodes[0].textContent);
    if (el.nodeName === "SELECT") status.push(el.value);
    if (el.nodeName === "TEXTAREA") status.push(el.value);
  });
  return status.every(str => str !== "");
}

export const actionNext = async () => {
  if (el("content-origin") !== null) {
    if (validateCampo() === false) return message("error-empety", "Debe completar todos los campos para continuar...")
    loading("content-origin");
    const { FormDestiny } = await import("./FormDestiny/createShadow.js");
    const { formHomeDelivery } = await import("./FormDestiny/dataForm.js");
    if (elementExist("content-destiny")) customElements.define("content-destiny", FormDestiny);
    replaceObject(FormDestiny, formHomeDelivery);
    changeProgress("is-active-destino");
    el("#box-envio").classList.remove("l-origin");
    el("#box-envio").classList.add("l-destiny");
    appendButton();
    return insertButtons();
  }

  if (el("content-destiny") !== null) {
    if (validateCampo() === false) return message("error-empety", "Debe completar todos los campos para continuar...")
    loading("content-destiny");
    const { FormShipment } = await import("./FormShipment/createShadow.js");
    if (elementExist("content-shipment")) customElements.define("content-shipment", FormShipment);
    replaceObject(FormShipment);
    changeProgress("is-active-envio");
    while (el(".btn--box")) {
      el("#box-envio").removeChild(el(".btn--box"));
    }
    replaceButtons("pay");
  }
}

const tst = () => {
  if (validateCampo() === false) return message("error-empety", "Debe completar todos los campos para continuar...")
  el(".container__payment").style.display = "grid";
  el(".btn-close.is-payment").addEventListener("click", () => {
    el(".container__payment").style.display = "none";
  });
  el("#form-checkout__submit").addEventListener("click", async () => {
    saveDetails();
    el(".container__payment").style.display = "none";
    el("#container__result").style.display = "grid";
    el("#box-snipper-pay").style.display = "none";
    el("#success-response").style.display = "grid";
    el(".btn-go-result").addEventListener("click", async () => {
      replace(snipper("snipper"), el("section"));
      const { renderLayout } = await import("../MisEnvios/createBox.js");
      renderLayout();
      el("#container__result").style.display = "none";
      el("#success-response").style.display = "none";
      const btn = el(".active-link");
      btn.classList.remove("active-link");
      const parent = el(".misenvios").parentNode;
      parent.classList.add("active-link");
    })
  })
}
