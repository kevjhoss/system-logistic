import {create,replace,el} from '../components/globalFunctions.js';
import {getUserData} from '../fetchingData.js';

const append = (datas, content) => {
  return (key) => {
    const p = create("p");
    p.textContent = datas[key];
    content.appendChild(p);
  }
}

export const renderLayout = async () => {
  const section = create("section");
  const h2 = create("h2");
  h2.textContent = "MI CUENTA";
  const content = new DocumentFragment();
  const datas = await getUserData();
  const setValue = append(datas, content);
  setValue("nombre_cliente");
  setValue("numero_documento");
  setValue("direccion");
  setValue("localidad");
  setValue("provincia");
  setValue("codigo_postal");
  setValue("telefono");
  setValue("correo_electronico");
  setValue("password");
  section.appendChild(h2);
  section.appendChild(content);
  replace(section, el("section"));
}
