import {el} from "../components/globalFunctions.js";

const getValue = value => localStorage.getItem(value);

const getProvinces = async () => {
  const datas = await fetch("index.php?controller=User&action=getProvince");
  const provinces = await datas.json();
  return provinces;
}

const getSucursal = async (province) => {
  const data = await fetch("https://api-sucursal.deno.dev/getSucursal", {
    method: "POST",
    body: province()
  });
  const values = await data.json();
  return values;
}

const saveShipping = async () => {
  const form = new FormData();
  form.append("peso", getValue("peso"));
  form.append("alto", getValue("alto"));
  form.append("ancho", getValue("ancho"));
  form.append("largo", getValue("largo"));
  form.append("costo", getValue("costo"));
  form.append("provincia-origen", getValue("provincia-origen"));
  form.append("sucursal-origen", getValue("sucursal-origen"));
  form.append("tipo-envio", getValue("domicilio") === null ? "sucursal" : "domicilio");
  form.append("metodo-pago", "mercado pago");
  form.append("estado", "Completo");

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
  form.append("provincia", getValue("provincia-destino"));
  form.append("codigo-postal", getValue("codigo-postal"));
  form.append("telefono", getValue("telefono"));
  form.append("correo-electronico", getValue("correo-electronico"));
  form.append("observaciones", getValue("observaciones"));
  form.append("sucursal", getValue("sucursal-destino"));

  const datas = await fetch("index.php?controller=User&action=saveAddressee", {
    method: "POST",
    body: form
  })
  const values = await datas.json();
  return values.id;
}

const saveDetails = async () => {
  const idAddressee = await saveAddressee();
  const idShipping = await saveShipping();
  const form = new FormData();
  form.append("idCliente", getValue("id_cliente"));
  form.append("idAddressee", idAddressee);
  form.append("idShipping", idShipping);
  await fetch("index.php?controller=User&action=saveDetails", {
    method: "POST",
    body: form
  });
  localStorage.clear();
}

export {
  saveDetails,
  getProvinces,
  getSucursal
}
