import { create, replace, el } from '../components/globalFunctions.js';
import {createTable} from './createTable.js';

export const renderLayout = async () => {
  const section = create("section");
  const h2 = create("h2");
  h2.textContent = "MIS ENVIOS";
  const table = await createTable();
  section.appendChild(h2);
  section.appendChild(table);
  replace(section, el("section"))
}
