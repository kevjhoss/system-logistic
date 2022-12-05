import {create, replace, el} from '../components/globalFunctions.js';
import {getShipment} from './fetchingData.js';

export const renderLayout = async () => {
  await getShipment();
  const section = create("section");
  const h2 = create("h2");
  h2.textContent = "MIS ENVIOS";
  section.appendChild(h2);
  replace(section, el("section"))
}
