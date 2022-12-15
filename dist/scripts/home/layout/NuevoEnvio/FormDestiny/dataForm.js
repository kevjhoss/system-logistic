import {getValue, setValue} from "../../components/globalFunctions.js";
import {getProvinces, getSucursal} from '../fetchingData.js';
import {validateDni,validateCP,validateGmail,validatePhone, validateStandart} from '../../components/validator.js';
const formHomeDelivery = [
  {
    label: "Nombre y Apellido",
    name: "nombre-completo",
    text: getValue("nombre-destinatario"),
    keyUp: setValue("nombre-destinatario"),
    validator: validateStandart
  },
  {
    label: "Numero de Documento",
    name: "numero-documento",
    text: getValue("numero-documento"),
    keyUp: setValue("numero-documento"),
    validator: validateDni
  },
  {
    label: "Direccion",
    name: "direccion",
    text: getValue("direccion"),
    keyUp: setValue("direccion"),
    validator: validateStandart
  },
  {
    label: "Localidad",
    name: "localidad",
    text: getValue("localidad"),
    keyUp: setValue("localidad"),
    validator: validateStandart
  },
  {
    element: "select",
    label: "Provincia",
    name: "provincia",
    keySucursal: "sucursal-destino",
    text: getValue("provincia-destino"),
    keyUp: setValue("provincia-destino"),
    getProvinces: await getProvinces()
  },
  {
    element: "textarea",
    label: "Observaciones del domicilio",
    name: "observaciones",
    text: getValue("observaciones"),
    keyUp: setValue("observaciones")
  },
  {
    label: "CP",
    name: "codigo-postal",
    text: getValue("codigo-postal"),
    keyUp: setValue("codigo-postal"),
    validator: validateCP
  },
  {
    label: "Cod. Area",
    name: "codigo-area",
    text: getValue("codigo-area"),
    keyUp: setValue("codigo-area"),
    validator: validateStandart
  },
  {
    label: "Telefono",
    name: "telefono",
    text: getValue("telefono"),
    keyUp: setValue("telefono"),
    validator: validatePhone
  },
  {
    label: "Correo Electronico",
    name: "correo-electronico",
    text: getValue("correo-electronico"),
    keyUp: setValue("correo-electronico"),
    validator: validateGmail
  }
];

const formBranchDelivery = [
  {
    label: "Nombre y Apellido",
    name: "nombre-completo",
    text: getValue("nombre-destinatario"),
    keyUp: setValue("nombre-destinatario"),
    validator: validateStandart
  },
  {
    element: "select",
    label: "Provincia",
    name: "provincia",
    text: getValue("provincia-destino"),
    keyUp: setValue("provincia-destino"),
    keyProvince: "provincia-destino",
    keySucursal: "sucursal-destino",
    getSucursal: getSucursal,
    getProvinces: await getProvinces()
  },
  {
    element: "select",
    label: "Sucursal de destino",
    name: "sucursal",
    text: getValue("sucursal-destino"),
    keyUp: setValue("sucursal-destino"),
    key: "sucursal-destino"
  },
  {
    label: "Cod. Area",
    name: "codigo-area",
    text: getValue("codigo-area"),
    keyUp: setValue("codigo-area"),
    validator: validateStandart
  },
  {
    label: "Telefono",
    name: "telefono",
    text: getValue("telefono"),
    keyUp: setValue("telefono"),
    validator: validatePhone
  },
  {
    label: "Correo Electronico",
    name: "correo-electronico",
    text: getValue("correo-electronico"),
    keyUp: setValue("correo-electronico"),
    validator: validateGmail
  }
];

export {
  formHomeDelivery,
  formBranchDelivery
}
