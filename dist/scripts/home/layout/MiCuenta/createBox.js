import {create,replace,el, elementExist} from '../components/globalFunctions.js';
import {getUserData} from '../fetchingData.js';

export const renderLayout = async () => {
  const {MiCuenta} = await import("./createShadow.js");
  if(elementExist("my-account")) customElements.define("my-account", MiCuenta);
  const datas = await getUserData();
  const section = create("section");
  section.appendChild(new MiCuenta(datas));
  replace(section, el("section"))
}
