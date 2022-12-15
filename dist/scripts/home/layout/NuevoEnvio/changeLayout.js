import {el,createButton} from '../components/globalFunctions.js';

const layoutBranch = async e => {
  const {FormDestiny} = await import("./FormDestiny/createShadow.js");
  const {formBranchDelivery} = await import("./FormDestiny/dataForm.js");
  const btnBranch = e.target === undefined ? e : e.target;
  const btnHome = btnBranch.previousElementSibling === undefined ? e.previousElementSibling : btnBranch.previousElementSibling;
  const form = el("#box-envio");
  form.replaceChild(new FormDestiny(formBranchDelivery), el("content-destiny"));
  localStorage.setItem("branch", "is-active");
  //Remove localStorage
  localStorage.removeItem("domicilio");
  localStorage.removeItem("numero-documento");
  localStorage.removeItem("direccion");
  localStorage.removeItem("localidad");
  localStorage.removeItem("codigo-postal");
  btnBranch.classList.add("is-active");
  btnHome.classList.remove("is-active");
};

const layoutHome = async e => {
  const {FormDestiny} = await import("./FormDestiny/createShadow.js");
  const {formHomeDelivery} = await import("./FormDestiny/dataForm.js");
  const btnHome = e.target === undefined ? e : e.target;
  const btnBranch = btnHome.nextElementSibling === undefined ? e.nextElementSibling : btnHome.nextElementSibling;
  const form = el("#box-envio");
  form.replaceChild(new FormDestiny(formHomeDelivery), el("content-destiny"));
  localStorage.setItem("domicilio", "is-active");
  //remove lacalStorage
  localStorage.removeItem("branch");
  localStorage.removeItem("sucursal-destino");

  btnHome.classList.add("is-active");
  btnBranch.classList.remove("is-active")
};

const getValue = value => localStorage.getItem(value);

const insertButtons = () => {
  const btnHomeDelivery = createButton("button", "ENTGREGA EN DOMICILIO");
  btnHomeDelivery.classList.add("btn--box", getValue("domicilio"), "is-end");
  btnHomeDelivery.addEventListener("click", layoutHome);
  const btnBranchDelivery = createButton("button", "ENTREGA EN SUCURSAL");
  btnBranchDelivery.classList.add("btn--box", getValue("branch"), "is-start");
  btnBranchDelivery.addEventListener("click", layoutBranch)
  if (getValue("branch") !== null) layoutBranch(btnBranchDelivery);
  if (getValue("domicilio") !== null) layoutHome(btnHomeDelivery);
  el("#box-envio").insertBefore(btnHomeDelivery, el("content-destiny"));
  el("#box-envio").insertBefore(btnBranchDelivery, el("content-destiny"));
}

export {
  insertButtons
}
