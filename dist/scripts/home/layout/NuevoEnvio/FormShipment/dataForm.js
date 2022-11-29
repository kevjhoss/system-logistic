const setValue = key => e => localStorage.setItem(key, e.target.value);
const getValue = key => () => localStorage.getItem(key) || "";

export const formShipment = [
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

