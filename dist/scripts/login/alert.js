import {createSvg} from "./createElement.js";
import {Icons} from "./Icons.js";

const createAlert = (status, str) => {
  const span = document.createElement("span");
  span.textContent = str;
  const svg = createSvg(512,512,2,2);
  svg.innerHTML = Icons(status);
  const div = document.createElement("div");
  div.classList.add(`alert`);
  div.classList.add(`alert-${status.split("-")[0]}`);
  div.appendChild(span);
  div.appendChild(svg);
  return div;
}

export {
  createAlert
}
