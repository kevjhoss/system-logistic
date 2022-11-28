import {createOptionsProvinces,createOptionsSucursal} from './createElement.js';
import {setValue,getValue} from './functions.js';

const formOrigin = [
  {
    label: "Nombre y Apellido",
    name: "full-name",
    type: "input",
    text: getValue("full-name"),
    keyUp: setValue("full-name")
  },
  {
    label: "Correo electrónico",
    name: "email",
    type: "input",
    text: getValue("email"),
    keyUp: setValue("email")
  },
  {
    label: "Provincia",
    name: "province",
    type: "select",
    create: createOptionsProvinces
  },
  {
    label: "Sucursal",
    name: "branch-office",
    type: "select",
    create: createOptionsSucursal
  },
];

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
    label: "Provincia",
    name: "provincia",
    text: getValue("provincia"),
    keyUp: setValue("provincia")
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
    label: "Provincia",
    name: "provincia",
    text: getValue("provincia"),
    keyUp: setValue("provincia")
  },
  {
    label: "Sucursal de destino",
    name: "sucursal",
    text: getValue("sucursal"),
    keyUp: setValue("sucursal")
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

const formShipment = [
  {
    label: "Peso",
    name: "peso",
    text: getValue("peso"),
    keyUp: setValue("peso")
  },
  {
    label: "Alto",
    name: "alto",
    text: getValue("alto"),
    keyUp: setValue("alto")
  },
  {
    label: "Largo",
    name: "largo",
    text: getValue("largo"),
    keyUp: setValue("largo")
  },
  {
    label: "Ancho",
    name: "ancho",
    text: getValue("ancho"),
    keyUp: setValue("ancho")
  },
  {
    label: "Costo",
    name: "costo",
    text: getValue("costo"),
    keyUp: setValue("costo")
  },
]

export {
  formOrigin,
  formHomeDelivery,
  formBranchDelivery,
  formShipment
}
