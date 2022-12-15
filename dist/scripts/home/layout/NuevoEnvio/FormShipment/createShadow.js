import {create} from '../../components/globalFunctions.js';
import {formShipment} from './dataForm.js';

export class FormShipment extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const div = create("div");
    div.id = "box-shipment";
    const content = new DocumentFragment();
    for (const data of formShipment) {
      const label = create("label");
      label.setAttribute("for", data.name);
      label.textContent = data.label;
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
      content.appendChild(label);
      content.appendChild(div);
    }
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/form-shipment.css");
    div.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}
