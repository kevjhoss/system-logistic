import { create, replace, el } from '../components/globalFunctions.js';
import { getShipment } from './fetchingData.js';

const createTable = (datas) => {
  const content = new DocumentFragment();
  for (const data of datas) {
    const table = document.createElement("table");
    const trh = document.createElement("tr");
    const trb = document.createElement("tr");
    const trhOne = document.createElement("tr");
    const trbOne = document.createElement("tr");
    const trhTwo = document.createElement("tr");
    const trbTwo = document.createElement("tr");
    const trhThree = document.createElement("tr");
    const trbThree = document.createElement("tr");
    const trhFour = document.createElement("tr");
    const trbFour = document.createElement("tr");
    const trhFive = document.createElement("tr");
    const trbFive = document.createElement("tr");
    for (const key in data) {
      if (key == "provincia_origen" || key == "sucursal_origen" || key == "fecha") {
        const th = document.createElement("th");
        th.textContent = key;
        const td = document.createElement("td");
        td.textContent = data[key];
        trh.appendChild(th);
        trb.appendChild(td);
      }
      if (key == "nombre_destinatario" || key == "provincia" || key == "sucursal" || key == "direccion") {
        const th = document.createElement("th");
        th.textContent = key;
        const td = document.createElement("td");
        td.textContent = data[key];
        trhOne.appendChild(th);
        trbOne.appendChild(td);
      }
      if (key == "codigo_postal" || key == "telefono" || key == "correo_electronico" || key == "localidad") {
        const th = document.createElement("th");
        th.textContent = key;
        const td = document.createElement("td");
        td.textContent = data[key];
        trhTwo.appendChild(th);
        trbTwo.appendChild(td);
      }
      if (key === "observaciones") {
        const th = document.createElement("th");
        th.textContent = key;
        th.colSpan = 4;
        const td = document.createElement("td");
        td.textContent = data[key];
        td.colSpan = 4;
        trhThree.appendChild(th);
        trbThree.appendChild(td);
      }
      if (key == "tipo_envio" || key == "peso" || key == "largo" || key == "ancho") {
        const th = document.createElement("th");
        th.textContent = key;
        const td = document.createElement("td");
        td.textContent = data[key];
        trhFour.appendChild(th);
        trbFour.appendChild(td);
      }
      if (key == "alto" || key == "costo_referencia" || key == "estado" || key == "metodo_pago") {
        const th = document.createElement("th");
        th.textContent = key;
        const td = document.createElement("td");
        td.textContent = data[key];
        trhFive.appendChild(th);
        trbFive.appendChild(td);
      }
    }
    table.appendChild(trh);
    table.appendChild(trb);
    table.appendChild(trhOne);
    table.appendChild(trbOne);
    table.appendChild(trhTwo);
    table.appendChild(trbTwo);
    table.appendChild(trhThree);
    table.appendChild(trbThree);
    table.appendChild(trhFour);
    table.appendChild(trbFour);
    table.appendChild(trhFive);
    table.appendChild(trbFive);
    content.appendChild(table);
  }
  return content;
}

export const renderLayout = async () => {
  await getShipment();
  const section = create("section");
  const h2 = create("h2");
  h2.textContent = "MIS ENVIOS";
  const datas = await getShipment();
  const table = createTable(datas);
  section.appendChild(h2);
  section.appendChild(table);
  replace(section, el("section"))
}
