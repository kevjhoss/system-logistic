export class Progress extends HTMLElement {
  constructor(state) {
    super();
    this.state = state;
    const shadow = this.attachShadow({mode: "open"});
    const div = document.createElement("div");
    div.classList.add("progress");
    const origen = document.createElement("span");
    origen.textContent = "ORIGEN";
    if (this.state === "is-active-origen") origen.classList.add(this.state);
    const destino = document.createElement("span");
    destino.textContent = "DESTINATARIO"
    if (this.state === "is-active-destino") destino.classList.add(this.state);
    const envio = document.createElement("span");
    envio.textContent = "ENVIO";
    if (this.state === "is-active-envio") envio.classList.add(this.state);
    const style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("href", "/dist/styles/components/progress.css");
    shadow.appendChild(style);
    div.appendChild(origen);
    div.appendChild(destino);
    div.appendChild(envio);
    shadow.appendChild(div);

  }
}
