import {validateNumbers} from '../../components/validator.js';
const setValue = key => e => localStorage.setItem(key, e.target.value);
const getValue = key => () => localStorage.getItem(key) || "";

export const formShipment = [
  {
    label: "Peso (Kg)",
    name: "peso",
    text: getValue("peso"),
    keyUp: setValue("peso"),
    validator: validateNumbers
  },
  {
    label: "Alto (cm)",
    name: "alto",
    text: getValue("alto"),
    keyUp: setValue("alto"),
    validator: validateNumbers
  },
  {
    label: "Largo (cm)",
    name: "largo",
    text: getValue("largo"),
    keyUp: setValue("largo"),
    validator: validateNumbers
  },
  {
    label: "Ancho (cm)",
    name: "ancho",
    text: getValue("ancho"),
    keyUp: setValue("ancho"),
    validator: validateNumbers
  },
  {
    label: "Costo de referencia",
    name: "costo",
    text: getValue("costo"),
    keyUp: setValue("costo"),
    validator: validateNumbers
  },
]

