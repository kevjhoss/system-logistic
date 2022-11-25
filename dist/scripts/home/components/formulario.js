const create = tag => document.createElement(tag);
class FormDestiny extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;

    const shadow = this.attachShadow({mode: "open"});
    const form = document.createElement("form");
    const content = new DocumentFragment();
    for (const value of this.datas) {
      const label = document.createElement("label");
      label.setAttribute("for", value.name);
      label.textContent = value.label;
      const input = document.createElement("input");
      input.name = value.name;
      content.appendChild(label);
      content.appendChild(input);
    };
    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', '/dist/styles/components/formulario.css');

    form.appendChild(content);
    shadow.appendChild(style);
    shadow.appendChild(form);
  }
}

export {
  FormDestiny
};
