import {Icons} from './getIcon.js';

const el = tag => document.querySelector(tag);

const create = tag => document.createElement(tag);

const createButton = (type, text) => {
  const button = create("button");
  button.type = type;
  if (text !== undefined) button.textContent = text;
  return button;
};

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

const createInput = data => {
  const div = create("div");
  const input = create("input");
  input.type = data.type;
  input.name = data.nameInput;
  input.autocomplete = "off";
  input.placeholder = data.placeholder;
  input.addEventListener("keyup", data.validator);
  const span = create("span");
  span.classList.add("message-error");
  const svg = createSvg(448,512,2,2);
  svg.innerHTML = Icons(data.nameIcon);
  if (data.type === "password") {
    const button = createButton("button");
    button.id = "toggle-password";
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="2em" height="2em"><path fill="hsl(0,0%,100%)" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"></path></svg>';
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

export {
  createInput,
  createButton,
  createAlert,
  createSvg,
  el
}
