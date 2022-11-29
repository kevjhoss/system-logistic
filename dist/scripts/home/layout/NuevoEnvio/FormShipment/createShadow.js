import {create} from '../../components/globalFunctions.js';
import {formShipment} from './dataForm.js';

export class FormShipment extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const div = create("div");
    const content = new DocumentFragment();
    for (const data of formShipment) {
      const label = create("label");
      label.setAttribute("for", data.name);
      label.textContent = data.label;
      const input = create("input");
      input.name = data.name
      input.value = data.text();
      input.addEventListener("keyup", data.keyUp);
      content.appendChild(label);
      content.appendChild(input);
    }
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/form-shipment.css");
    div.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}
