import {create} from '../components/globalFunctions.js';
import {formOrigin, formShipment} from './datasForm.js';

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
      if (data.type === "input") {
        const input = create("input");
        input.name = data.name;
        input.value = data.text();
        input.addEventListener("keyup", data.keyUp);
        content.appendChild(input);
        continue;
      }
      const select = create("select");
      const option = create("option");
      option.value = "";
      option.setAttribute("selected","");
      option.setAttribute("disabled","");
      option.setAttribute("hidden","");
      option.textContent = "Seleccionar...";
      select.appendChild(option);
      select.name = data.name;
      data.create(select);
      content.appendChild(select);
    }
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/form-origin.css");
    div.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
};

class FormDestiny extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;
    const shadow = this.attachShadow({mode: "open"});
    const div = create("div");
    const content = new DocumentFragment();
    for (const data of datas) {
      const label = create("label");
      label.setAttribute("for", data.name);
      label.textContent = data.label;
      const input = create("input");
      input.name = data.name;
      input.value = data.text();
      input.addEventListener("keyup", data.keyUp);
      content.appendChild(label);
      content.appendChild(input);
    };
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/form-destiny.css");
    div.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(div)
  }
};

class FormShipment extends HTMLElement {
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

export {
  FormOrigin,
  FormDestiny,
  FormShipment
}
