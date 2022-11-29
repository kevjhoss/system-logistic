import {el} from "../components/globalFunctions.js";
const getValue = value => localStorage.getItem(value);

const getProvinces = async () => {
  const datas = await fetch("index.php?controller=User&action=getProvince");
  const provinces = await datas.json();
  return provinces;
}

const saveShipping = async () => {
  const form = new FormData();
  form.append("peso", getValue("peso"));
  form.append("alto", getValue("alto"));
  form.append("ancho", getValue("ancho"));
  form.append("largo", getValue("largo"));
  form.append("costo", getValue("costo"));

  const datas = await fetch("index.php?controller=User&action=saveEnvio", {
    method: "POST",
    body: form
  });
  const values = await datas.json();
  return values.id;
}

const saveAddressee = async () => {
  const form = new FormData();
  form.append("destinatario", getValue("nombre-destinatario"));
  form.append("numero-documento", getValue("numero-documento"));
  form.append("direccion", getValue("direccion"));
  form.append("localidad", getValue("localidad"));
  form.append("provincia", getValue("provincia"));
  form.append("codigo-postal", getValue("codigo-postal"));
  form.append("telefono", getValue("telefono"));
  form.append("correo-electronico", getValue("correo-electronico"));

  const datas = await fetch("index.php?controller=User&action=saveAddressee", {
    method: "POST",
    body: form
  })
  const values = await datas.json();
  return values.id;
}

const saveDetails = async e => {
  e.preventDefault();
  const {renderLayout} = await import("../MisEnvios/createBox.js");
  const idAddressee = await saveAddressee();
  const idShipping = await saveShipping();
  const form = new FormData();
  form.append("idCliente", 17);
  form.append("idAddressee", idAddressee);
  form.append("idShipping", idShipping);
  await fetch("index.php?controller=User&action=saveDetails", {
    method: "POST",
    body: form
  });

  const n = el(".active-link");
  n.classList.remove("active-link");

  const mis = el(".misenvios").parentNode;
  mis.classList.add("active-link");

  localStorage.clear();
  renderLayout();
}

export {
  saveDetails,
  getProvinces
}
