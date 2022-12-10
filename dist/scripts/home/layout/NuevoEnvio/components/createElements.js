import { create, getValue } from '../../components/globalFunctions.js';

const options = () => {
  const option = create("option");
  option.setAttribute("selected", "");
  option.setAttribute("disabled", "");
  option.setAttribute("hidden", "");
  option.value = "";
  option.textContent = "Seleccionar....";
  return option;
}


let sucursalesOrigen = [];
let sucursalesDestino = [];

export const createSelect = (data) => {
  if (localStorage.getItem("sucursal-origen") === null) sucursalesOrigen = [];
  if (localStorage.getItem("sucursal-destino") === null) sucursalesDestino = [];
  const select = create("select");
  select.name = data.name;
  select.addEventListener("click", data.keyUp);
  const option = options();
  if (data.text() !== "") {
    option.value = data.text();
    option.textContent = data.text();
  }

  select.appendChild(option);

  if (data.keySucursal === undefined) {
    if (data.key == "sucursal-origen") {
    if (sucursalesOrigen.length > 0) {
      const content = new DocumentFragment();
      for (const value of sucursalesOrigen) {
        const options = create("option");
        if (localStorage.getItem("sucursal-origen") === value) {
          options.value = value;
          options.textContent = value;
          options.selected = true;
          content.appendChild(options);
          continue;
        }
        options.value = value;
        options.textContent = value;
        content.appendChild(options)
      }
      select.appendChild(content);
      return select;
    }
    }
    if (data.key == "sucursal-destino") {
    if (sucursalesDestino.length > 0) {
      const content = new DocumentFragment();
      for (const value of sucursalesDestino) {
        const options = create("option");
        if (localStorage.getItem("sucursal-destino") === value) {
          options.value = value;
          options.textContent = value;
          options.selected = true;
          content.appendChild(options);
          continue;
        }
        options.value = value;
        options.textContent = value;
        content.appendChild(options)
      }
      select.appendChild(content);
      return select;
    }
    }
    return select;
  }

  for (const province of data.getProvinces) {
    const option = create("option");
    option.value = province.name_province;
    option.textContent = province.name_province;
    select.appendChild(option);
  }

  if (data.getSucursal !== undefined) {
    select.addEventListener("click", async () => {
      if (select.value === "") return null;
      const sucursal = select.nextElementSibling.nextElementSibling;
      const content = new DocumentFragment();
      const values = await data.getSucursal(getValue(data.keyProvince));
      if (data.keySucursal == "sucursal-origen") sucursalesOrigen = values;
      if (data.keySucursal == "sucursal-destino") sucursalesDestino = values;
      localStorage.setItem(data.keySucursal, values[0]);
      for (const value of values) {
        const options = create("option");
        options.value = value;
        options.textContent = value;
        content.appendChild(options)
      }
      sucursal.innerHTML = "";
      sucursal.appendChild(content);
    });
    return select;
  }
  return select;
}
