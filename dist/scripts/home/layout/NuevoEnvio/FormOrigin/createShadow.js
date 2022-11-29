import {create} from '../../components/globalFunctions.js';
import {formOrigin} from './dataForm.js';
import {createSelect} from '../components/createElements.js';

class FormOrigin extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    const div = create("div");
    const content = new DocumentFragment();
    for (const data of formOrigin) {
      const label = create("label");
      label.setAttribute("for", data.name);
      label.textContent = data.label;
      content.appendChild(label);
      if (data.element === "select") {
        content.appendChild(createSelect(data))
        continue;
      }
      const input = create("input");
      input.name = data.name;
      input.value = data.text();
      input.addEventListener("keyup", data.keyUp);
      content.appendChild(input);
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
