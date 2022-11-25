const create = tag => document.createElement(tag);
class FormDestiny extends HTMLElement {
  constructor(datas) {
    super();
    this.datas = datas;

    const shadow = this.attachShadow({mode: "open"});
    const form = create("form");
    const content = new DocumentFragment();
    for (const value of this.datas) {
      const label = create("label");
      label.setAttribute("for", value.name);
      label.textContent = value.label;
      const input = create("input");
      input.name = value.name;
      content.appendChild(label);
      content.appendChild(input);
    };
    const style = create('link');
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
