import { create, replace, el } from '../components/globalFunctions.js';
import {createTable} from './createTable.js';

export const renderLayout = async () => {
  const section = create("section");
  const h1 = create("h1");
  h1.classList.add("titulo-principal");
  h1.textContent = "MIS ENVIOS";
  const table = await createTable();
  section.appendChild(h1);
  section.appendChild(table);
  replace(section, el("section"))
}
