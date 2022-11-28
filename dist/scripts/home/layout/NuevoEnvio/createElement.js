import {create} from '../components/globalFunctions.js';
import {getProvinces, getSucursal} from './fetchingData.js';

const createOptionsProvinces = async select => {
  const values = await getProvinces();
  const content = new DocumentFragment();
  for (const value of values) {
    const options = create("option");
    options.value = value.name_province;
    options.textContent = value.name_province;
    content.appendChild(options);
  }
  select.appendChild(content);
}

const createOptionsSucursal = async select => {
  const values = await getSucursal();
  const content = new DocumentFragment();
  for (const value of values) {
    const options = create("option");
    options.value = value.name_sucursal;
    options.textContent = value.name_sucursal;
    content.appendChild(options);
  }
  select.appendChild(content);
}

export {
  createOptionsProvinces,
  createOptionsSucursal,
}
