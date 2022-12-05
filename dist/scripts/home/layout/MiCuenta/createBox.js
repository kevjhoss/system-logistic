import {create,replace,el} from '../components/globalFunctions.js';
import {getUserData} from './fetchingData.js';

export const renderLayout = async () => {
  const section = create("section");
  const h2 = create("h2");
  h2.textContent = "MI CUENTA";
  const content = new DocumentFragment();
  const datas = await getUserData();
  for (const key in datas) {
    const p = create("p");
    if (key === "id_cliente") continue;
    p.textContent = datas[key];
    content.appendChild(p);
  }
  const btn = create("button");
  btn.textContent = "Cerrar Sesion";
  btn.addEventListener("click", () => location.href = "index.php?controller=User&exit=true");
  section.appendChild(h2);
  section.appendChild(content);
  section.appendChild(btn);
  replace(section, el("section"));
}
