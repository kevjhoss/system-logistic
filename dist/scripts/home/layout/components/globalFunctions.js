import {Icons} from './getIcons.js';

const el = tag => document.querySelector(tag);

const create = tag => document.createElement(tag);

const replace = (newElement, replaceElement) => document.body.replaceChild(newElement, replaceElement);

const getValue = key => () => localStorage.getItem(key) || "";

const setValue = key => e => localStorage.setItem(key, e.target.value);

const setItem = (key, value) => localStorage.setItem(key, value);

const elementExist = content => customElements.get(content) === undefined;

const createButton = (type, text) => {
  const button = create("button");
  button.type = type;
  if (text !== null) button.textContent = text;
  return button;
}

const createSvg = (vh,vw,width,height) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", `0 0 ${vh} ${vw}`);
  svg.setAttributeNS(null, "width", `${width}em`);
  svg.setAttributeNS(null, "height", `${height}em`);
  return svg;
};

const createAlert = (status, text) => {
  const span = create("span");
  span.textContent = text;
  const svg = createSvg(512,512,2,2);
  svg.innerHTML = Icons(status);
  const div = create("div");
  div.classList.add("alert", `alert-${status.split("-")[0]}`);
  div.appendChild(svg);
  div.appendChild(span);
  return div;
};

const message = (status,type,text) => {
  const div = document.querySelector(`div.${type}`);
  if (div !== null) return document.body.replaceChild(createAlert(status,text), div);
  document.body.appendChild(createAlert(status,text));
}

export {
  el,
  create,
  replace,
  createButton,
  getValue,
  setValue,
  setItem,
  message,
  elementExist,
  createSvg
}
