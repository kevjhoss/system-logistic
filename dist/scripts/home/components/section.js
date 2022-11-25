import {create,createButton, getElement} from './createElement.js';
import {formHome, formOffice} from './datas.js';

import {FormDestiny} from './formulario.js';
customElements.define("form-destiny", FormDestiny);

const layoutOffice = e => {
  const btnOffice = e.target;
  const btnHome = e.target.previousElementSibling;
  const section = getElement("section");
  section.replaceChild(new FormDestiny(formOffice), getElement("form-destiny"));
  btnOffice.removeEventListener("click", layoutOffice);
  btnHome.addEventListener("click", layoutHome);
  btnOffice.classList.add("btn-active");
  btnHome.classList.remove("btn-active")
};

const layoutHome = e => {
  const btnHome = e.target;
  const btnOffice = e.target.nextElementSibling;
  const section = getElement("section");
  section.replaceChild(new FormDestiny(formHome), getElement("form-destiny"));
  btnHome.removeEventListener("click", layoutHome);
  btnOffice.addEventListener("click", layoutOffice);
  btnHome.classList.add("btn-active");
  btnOffice.classList.remove("btn-active")
};

const nuevoEnvio = () => {
  const h2 = create("h2");
  h2.textContent = "COMPLETAR LOS DATOS DE DESTINO";
  const section = create("section");
  section.classList.add("box-envio");
  const btnHome = createButton("Domicilio");
  btnHome.classList.add("btn-active");
  const btnOffice = createButton("Sucursal", layoutOffice);
  section.appendChild(h2);
  section.appendChild(btnHome);
  section.appendChild(btnOffice);
  section.appendChild(new FormDestiny(formHome));
  return section;
}

const inicio = () => {
  const h2 = create("h2");
  h2.textContent = "INICIO";
  const p = create("p");
  p.textContent = "Esta es la parte de la pagina con la informacion inicial para el usario";
  const section = create("section");
  section.appendChild(h2);
  section.appendChild(p);
  return section;
}

const misEnvios = () => {
  const h2 = create("h2");
  h2.textContent = "MIS ENVIOS";
  const p = create("p");
  p.textContent = "Esta parte de la pagina muestra la informacion de los envios en general del usuario";
  const section = create("section");
  section.appendChild(h2);
  section.appendChild(p);
  return section;
}

const Cuenta = () => {
  const h2 = create("h2");
  h2.textContent = "MI CUENTA";
  const p = create("p");
  p.textContent = "Esta parte de la pagina muestra la informacion del usuario y la posibilidad de editar su cuenta";
  const a = create("a");
  a.href = "index.php?controller=User&exit=true";
  a.textContent = "Cerrar Sesion";
  const button = create("button");
  button.appendChild(a);
  const section = create("section");
  section.appendChild(h2);
  section.appendChild(p);
  section.appendChild(button);
  return section;
}

const panel = layout => {
  if (layout === "Inicio") return inicio();
  if (layout === "Nuevo Envio") return nuevoEnvio();
  if (layout === "Mis Envios") return misEnvios();
  if (layout === "Mi Cuenta") return Cuenta();
}

export {
  panel
}
