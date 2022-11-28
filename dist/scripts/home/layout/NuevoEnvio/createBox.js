import {el,create,createButton,replace} from '../components/globalFunctions.js';
import {FormOrigin, FormDestiny, FormShipment} from './createShadow.js';
import {formHomeDelivery, formBranchDelivery} from './datasForm.js';
import {saveDetails} from './fetchingData.js';
customElements.define("content-origin", FormOrigin);
customElements.define("content-destiny", FormDestiny);
customElements.define("content-shipment", FormShipment);

const layoutBranch = e => {
  const btnBranch = e.target;
  const btnHome = e.target.previousElementSibling;
  const form = el("#box-envio");
  form.replaceChild(new FormDestiny(formBranchDelivery), el("content-destiny"));
  btnBranch.removeEventListener("click", layoutBranch);
  btnHome.addEventListener("click", layoutHome);
  btnBranch.classList.add("is-active");
  btnHome.classList.remove("is-active")
};

const layoutHome = e => {
  const btnHome = e.target;
  const btnBranch = e.target.nextElementSibling;
  const form = el("#box-envio");
  form.replaceChild(new FormDestiny(formHomeDelivery), el("content-destiny"));
  btnHome.removeEventListener("click", layoutHome);
  btnBranch.addEventListener("click", layoutBranch);
  btnHome.classList.add("is-active");
  btnBranch.classList.remove("is-active")
};

const insertButtons = (form) => {
  const btnHomeDelivery = createButton("button", "ENTGREGA EN DOMICILIO");
  btnHomeDelivery.classList.add("btn--box", "is-active", "is-end");
  const btnBranchDelivery = createButton("button", "ENTREGA EN SUCURSAL");
  btnBranchDelivery.classList.add("btn--box", "is-start");
  btnBranchDelivery.addEventListener("click", layoutBranch)
  form.insertBefore(btnHomeDelivery, el("content-destiny"));
  form.insertBefore(btnBranchDelivery, el("content-destiny"));
}

const prev = () => {
  const form = el("#box-envio");
  if (el("content-destiny") !== null) {
    form.replaceChild(new FormOrigin, el("content-destiny"));
    while(el(".btn--box")) form.removeChild(el(".btn--box"));
    return form.removeChild(el(".btn-prev--grid"));
  }

  if (el("content-shipment") !== null) {
    form.replaceChild(new FormDestiny(formHomeDelivery), el("content-shipment"));
    const btnNext = createButton("button", "Siguiente");
    btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    btnNext.addEventListener("click", next);
    form.replaceChild(btnNext, el(".btn-next--grid"));
    return insertButtons(form);
  }
}

const next = () => {
  const form = el("#box-envio");
  if (el("content-origin") !== null) {
    form.classList.remove("l-origin");
    form.classList.add("l-destiny");
    form.replaceChild(new FormDestiny(formHomeDelivery), el("content-origin"));
    const btnPrev = createButton("button", "Atrás");
    btnPrev.classList.add("btn--action", "btn-action--text", "btn-prev--grid");
    btnPrev.addEventListener("click", prev);
    form.insertBefore(btnPrev, el(".btn-next--grid"));
    return insertButtons(form);
  }

  if (el("content-destiny") !== null) {
    while(el(".btn--box")) form.removeChild(el(".btn--box"));
    const btnSave = createButton("submit", "Guardar Envio");
    btnSave.classList.add("btn--action", "btn-action--text", "btn-next--grid");
    form.replaceChild(btnSave, el(".btn-next--grid"));
    return form.replaceChild(new FormShipment, el("content-destiny"));
  }
}

export const renderLayout = () => {
  const section = create("section");
  const form = create("form");
  form.id = "box-envio";
  form.classList.add("l-origin");
  form.addEventListener("submit", e => {
    e.preventDefault();
    saveDetails();
  });
  form.appendChild(new FormOrigin);
  const btnNext = createButton("button", "Siguiente");
  btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
  btnNext.addEventListener("click", next);
  form.appendChild(btnNext);
  section.appendChild(form);
  replace(section, el("section"));
}
