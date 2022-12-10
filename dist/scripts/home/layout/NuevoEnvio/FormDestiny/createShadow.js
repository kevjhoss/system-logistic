import { create } from '../../components/globalFunctions.js';
import { createSelect } from '../components/createElements.js';

export class FormDestiny extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;
    const shadow = this.attachShadow({ mode: "open" });
    const div = create("div");
    div.id = "box-destino";
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
    };
    const style = create("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/form-destiny.css");
    div.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(div)
  }
};
