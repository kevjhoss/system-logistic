import {el,createButton} from '../components/globalFunctions.js';

const layoutBranch = async e => {
  const {FormDestiny} = await import("./FormDestiny/createShadow.js");
  const {formBranchDelivery} = await import("./FormDestiny/dataForm.js");
  const btnBranch = e.target === undefined ? e : e.target;
  const btnHome = btnBranch.previousElementSibling === undefined ? e.previousElementSibling : btnBranch.previousElementSibling;
  const form = el("#box-envio");
  form.replaceChild(new FormDestiny(formBranchDelivery), el("content-destiny"));
  localStorage.setItem("branch", "is-active");
  localStorage.removeItem("domicilio");
  btnBranch.classList.add("is-active");
  btnHome.classList.remove("is-active")
};

const layoutHome = async e => {
  const {FormDestiny} = await import("./FormDestiny/createShadow.js");
  const {formHomeDelivery} = await import("./FormDestiny/dataForm.js");
  const btnHome = e.target === undefined ? e : e.target;
  const btnBranch = btnHome.nextElementSibling === undefined ? e.nextElementSibling : btnHome.nextElementSibling;
  const form = el("#box-envio");
  form.replaceChild(new FormDestiny(formHomeDelivery), el("content-destiny"));
  localStorage.setItem("domicilio", "is-active");
  localStorage.removeItem("branch");
  btnHome.classList.add("is-active");
  btnBranch.classList.remove("is-active")
};

const insertButtons = (form) => {
  const sucursal = () => localStorage.getItem("branch");
  const domicilio = () => localStorage.getItem("domicilio");
  const btnHomeDelivery = createButton("button", "ENTGREGA EN DOMICILIO");
  btnHomeDelivery.classList.add("btn--box", domicilio(), "is-end");
  btnHomeDelivery.addEventListener("click", layoutHome);
  const btnBranchDelivery = createButton("button", "ENTREGA EN SUCURSAL");
  btnBranchDelivery.classList.add("btn--box", sucursal(), "is-start");
  btnBranchDelivery.addEventListener("click", layoutBranch)
  if (sucursal() !== null) layoutBranch(btnBranchDelivery);
  if (domicilio() !== null) layoutHome(btnHomeDelivery);
  form.insertBefore(btnHomeDelivery, el("content-destiny"));
  form.insertBefore(btnBranchDelivery, el("content-destiny"));
}

export {
  insertButtons
}
