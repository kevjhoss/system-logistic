import {create,replace,el} from '../components/globalFunctions.js';

export const renderLayout = () => {
  const section = create("section");
  const h2 = create("h2");
  h2.textContent = "MI CUENTA";
  section.appendChild(h2);
  replace(section, el("section"));
}
