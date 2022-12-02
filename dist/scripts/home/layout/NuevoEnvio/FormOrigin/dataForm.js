import {getValue,setValue} from '../../components/globalFunctions.js';
import {getProvinces, getSucursal} from '../fetchingData.js';

export const formOrigin = [
  {
    label: "Nombre y Apellido",
    name: "full-name",
    text: getValue("full-name"),
    keyUp: setValue("full-name")
  },
  {
    label: "Correo electrónico",
    name: "email",
    text: getValue("email"),
    keyUp: setValue("email")
  },
  {
    element: "select",
    label: "Provincia",
    name: "province",
    text: getValue("provincia-origen"),
    keyUp: setValue("provincia-origen"),
    getProvinces: await getProvinces(),
    getSucursal: getSucursal
  },
  {
    element: "select",
    label: "Sucursal",
    name: "branch-office",
    text: getValue("sucursal-origen"),
    keyUp: setValue("sucursal-origen"),
  },
];
