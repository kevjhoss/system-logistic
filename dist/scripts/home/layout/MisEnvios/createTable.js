import { create } from '../components/globalFunctions.js';
import { getShipment } from "../fetchingData.js";

const append = (data, head, body) => {
  return (key, num = 1) => {
    const th = create("th");
    const td = create("td");
    th.textContent = key;
    th.colSpan = num;
    td.textContent = data[key];
    td.colSpan = num;
    head.appendChild(th);
    body.appendChild(td);
  }
}

const createTitle = (el, title) => {
  const th = create("th");
  th.textContent = title;
  th.classList.add("title-table");
  th.colSpan = 4;
  el.appendChild(th);
}

export const createTable = async () => {
  const datas = await getShipment();
  const content = new DocumentFragment();
  for (const data of datas) {
    const table = create("table");
    const titleOrigen = create("tr");
    const headOrigen = create("tr");
    const bodyOrigen = create("tr");
    const titleDestination = create("tr");
    const headOneDestination = create("tr");
    const bodyOneDestination = create("tr");
    const headTwoDestination = create("tr");
    const bodyTwoDestination = create("tr");
    const headThreeDestination = create("tr");
    const bodyThreeDestination = create("tr");
    const titleShipping = create("tr");
    const headOneShipping = create("tr");
    const bodyOneShipping = create("tr");
    const headTwoShipping = create("tr");
    const bodyTwoShipping = create("tr");

    createTitle(titleOrigen, "ORIGEN");
    const firstRowOrigin = append(data, headOrigen, bodyOrigen);
    firstRowOrigin("provincia_origen");
    firstRowOrigin("sucursal_origen");
    firstRowOrigin("fecha", 2);

    createTitle(titleDestination, "DESTINO");
    const firstRowDestination = append(data, headOneDestination, bodyOneDestination);
    firstRowDestination("nombre_destinatario");
    firstRowDestination("provincia");
    firstRowDestination("sucursal");
    firstRowDestination("direccion");
    const secondRowDestination = append(data, headTwoDestination, bodyTwoDestination);
    secondRowDestination("codigo_postal");
    secondRowDestination("telefono");
    secondRowDestination("correo_electronico");
    secondRowDestination("localidad");
    const thirdRowDestination = append(data, headThreeDestination, bodyThreeDestination);
    thirdRowDestination("observaciones", 4);

    createTitle(titleShipping, "PAQUETE");
    const firstRowShipping = append(data, headOneShipping, bodyOneShipping);
    firstRowShipping("tipo_envio");
    firstRowShipping("peso");
    firstRowShipping("largo");
    firstRowShipping("ancho");
    const secondRowShipping = append(data, headTwoShipping, bodyTwoShipping);
    secondRowShipping("alto");
    secondRowShipping("costo");
    secondRowShipping("estado");
    secondRowShipping("metodo_pago");

    table.appendChild(titleOrigen);
    table.appendChild(headOrigen);
    table.appendChild(bodyOrigen);
    table.appendChild(titleDestination);
    table.appendChild(headOneDestination);
    table.appendChild(bodyOneDestination);
    table.appendChild(headTwoDestination);
    table.appendChild(bodyTwoDestination);
    table.appendChild(headThreeDestination);
    table.appendChild(bodyThreeDestination);
    table.appendChild(titleShipping);
    table.appendChild(headOneShipping);
    table.appendChild(bodyOneShipping);
    table.appendChild(headTwoShipping);
    table.appendChild(bodyTwoShipping);
    content.appendChild(table);
  }
  return content;
}
