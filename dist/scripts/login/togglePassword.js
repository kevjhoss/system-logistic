import {createSvg} from "./createElement.js";
import {Icons} from "./Icons.js";

export const togglePassword = (button, input) => {
  button.innerHTML = "";
  if (input.type === "password") {
    const svg = createSvg(640,512,2,2);
    svg.innerHTML = Icons("hidden-password", "hsl(0,0%,100%)")
    button.appendChild(svg);
    return input.type = "text";
  }
  const svg = createSvg(576,512,2,2);
  svg.innerHTML = Icons("show-password", "hsl(0,0%,100%)")
  button.appendChild(svg);
  return input.type = "password";
}
