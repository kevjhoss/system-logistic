import {create, replace, el} from "../components/globalFunctions.js";

export const renderLayout = () => {
  const section = create("section");
  const h2 = create("h2")
  h2.textContent = "INICIO"
  const p = create("p");
  p.textContent = "Esta es la parte de la pagina con la informacion inicial para el usario";
  section.appendChild(h2);
  section.appendChild(p);
  replace(section, el("section"))
}
