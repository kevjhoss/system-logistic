import {getValue, setValue} from "../../components/globalFunctions.js";
import {getProvinces, getSucursal} from '../fetchingData.js';

const formHomeDelivery = [
  {
    label: "Nombre y Apellido",
    name: "nombre-completo",
    text: getValue("nombre-destinatario"),
    keyUp: setValue("nombre-destinatario")
  },
  {
    label: "Numero de Documento",
    name: "numero-documento",
    text: getValue("numero-documento"),
    keyUp: setValue("numero-documento")
  },
  {
    label: "Direccion",
    name: "direccion",
    text: getValue("direccion"),
    keyUp: setValue("direccion")
  },
  {
    label: "Localidad",
    name: "localidad",
    text: getValue("localidad"),
    keyUp: setValue("localidad")
  },
  {
    element: "select",
    label: "Provincia",
    name: "provincia",
    text: getValue("provincia-destino"),
    keyUp: setValue("provincia-destino"),
    getProvinces: await getProvinces(),
    getSucursal: getSucursal
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
    keyUp: setValue("codigo-postal")
  },
  {
    label: "Cod. Area",
    name: "codigo-area",
    text: getValue("codigo-area"),
    keyUp: setValue("codigo-area")
  },
  {
    label: "Telefono",
    name: "telefono",
    text: getValue("telefono"),
    keyUp: setValue("telefono")
  },
  {
    label: "Correo Electronico",
    name: "correo-electronico",
    text: getValue("correo-electronico"),
    keyUp: setValue("correo-electronico")
  }
];

const formBranchDelivery = [
  {
    label: "Nombre y Apellido",
    name: "nombre-completo",
    text: getValue("nombre-destinatario"),
    keyUp: setValue("nombre-destinatario")
  },
  {
    element: "select",
    label: "Provincia",
    name: "provincia",
    text: getValue("provincia-destino"),
    keyUp: setValue("provincia-destino"),
    getProvinces: await getProvinces(),
    getSucursal: getSucursal
  },
  {
    element: "select",
    label: "Sucursal de destino",
    name: "sucursal",
    text: getValue("sucursal-destino"),
    keyUp: setValue("sucursal-destino"),
  },
  {
    element: "textarea",
    label: "Observaciones del domicilio",
    name: "observaciones",
    text: getValue("observaciones"),
    keyUp: setValue("observaciones")
  },
  {
    label: "Cod. Area",
    name: "codigo-area",
    text: getValue("codigo-area"),
    keyUp: setValue("codigo-area")
  },
  {
    label: "Telefono",
    name: "telefono",
    text: getValue("telefono"),
    keyUp: setValue("telefono")
  },
  {
    label: "Correo Electronico",
    name: "correo-electronico",
    text: getValue("correo-electronico"),
    keyUp: setValue("correo-electronico")
  }
];

export {
  formHomeDelivery,
  formBranchDelivery
}
