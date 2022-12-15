import {create} from '../../components/globalFunctions.js';
import {formOrigin} from './dataForm.js';
import {createSelect} from '../components/createElements.js';

class FormOrigin extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const div = create("div");
    div.id = "box-origin";
    const content = new DocumentFragment();
    for (const data of formOrigin) {
      const label = create("label");
      label.setAttribute("for", data.name);
      label.textContent = data.label;
      content.appendChild(label);
      if (data.element === "select") {
        content.appendChild(createSelect(data, "provincia-origen"))
        continue;
      }
      const div = create("div");
      div.classList.add("box-item");
      const input = create("input");
      input.name = data.name;
      input.value = data.text();
      input.textContent = data.text();
      input.autocomplete = "off";
      input.addEventListener("keyup", data.keyUp);
      if (data.validator !== undefined) input.addEventListener("keyup", data.validator);
      const span = create("span");
      span.textContent = "error";
      span.classList.add("message-error");
      div.appendChild(input);
      div.appendChild(span);
      content.appendChild(div);
    }
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/form-origin.css");
    div.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
};

export {
  FormOrigin
}
