import {createSvg} from './createElement.js';
import {Icons} from "./getIcon.js";

export default (button, input) => {
  button.innerHTML = "";
  if (input.type === "password") {
    const svg = createSvg(640,512,2,2);
    svg.innerHTML = Icons("hidden-password")
    button.appendChild(svg);
    return input.type = "text";
  }
  const svg = createSvg(576,512,2,2);
  svg.innerHTML = Icons("show-password")
  button.appendChild(svg);
  return input.type = "password";
}
