import { create } from '../../components/globalFunctions.js';
import { createSelect } from '../components/createElements.js';

export class FormDestiny extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;
    const shadow = this.attachShadow({ mode: "open" });
    const div = create("div");
    const content = new DocumentFragment();
    for (const data of datas) {
      const label = create("label");
      label.setAttribute("for", data.name);
      label.textContent = data.label;
      content.appendChild(label);
      if (data.element === "select") {
        content.appendChild(createSelect(data, "provincia-destino"));
        continue;
      }
      if (data.element === "textarea") {
        const textarea = create("textarea");
        textarea.value = data.text();
        textarea.addEventListener("keyup", data.keyUp);
        content.appendChild(textarea);
        continue;
      }
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
