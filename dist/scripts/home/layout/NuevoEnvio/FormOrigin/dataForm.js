import {getValue,setValue} from '../../components/globalFunctions.js';
import {getProvinces, getSucursal} from '../fetchingData.js';
import {validateStandart, validateGmail} from '../../components/validator.js';

export const formOrigin = [
  {
    label: "Nombre y Apellido",
    name: "full-name",
    text: getValue("full-name"),
    keyUp: setValue("full-name"),
    validator: validateStandart
  },
  {
    label: "Correo electrónico",
    name: "email",
    text: getValue("email"),
    keyUp: setValue("email"),
    validator: validateGmail
  },
  {
    element: "select",
    label: "Provincia",
    name: "province",
    text: getValue("provincia-origen"),
    keyUp: setValue("provincia-origen"),
    keyProvince: "provincia-origen",
    keySucursal: "sucursal-origen",
    getSucursal: getSucursal,
    getProvinces: await getProvinces()
  },
  {
    element: "select",
    label: "Sucursal",
    name: "branch-office",
    text: getValue("sucursal-origen"),
    keyUp: setValue("sucursal-origen"),
    key: "sucursal-origen"
  },
];
