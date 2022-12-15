import {create, replace, el} from "../components/globalFunctions.js";

export const renderLayout = () => {
  const section = create("section");
  const h1 = create("h1");
  h1.textContent = "¡BIENVENIDO!";
  h1.classList.add("titulo-principal");
  section.appendChild(h1);
  replace(section, el("section"));
}
