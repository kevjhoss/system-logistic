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

const ctxOpt = (select) => {
  return (value) => {
    const option = create("option");
    option.textContent = value;
    option.value = value;
    select.appendChild(option);
  }
}

export const createSelect = (data, tst) => {
  const select = create("select");
  select.name = data.name;
  select.addEventListener("click", data.keyUp);
  const option = options();
  if (data.text() !== "") option.textContent = data.text();
  select.appendChild(option);
  if (data.getSucursal === undefined) {
    const option = ctxOpt(select);
    option("sucursal 1")
    option("sucursal 2")
    option("sucursal 3")
    option("sucursal 4")
    option("sucursal 5")
    option("sucursal 6")
    return select;
  };

  for (const province of data.getProvinces) {
    const option = create("option");
    option.value = province.name_province;
    option.textContent = province.name_province;
    select.appendChild(option);
  }

  select.addEventListener("click", async e => {
    if (e.target.nodeName == "SELECT") return null;
    const sucursal = select.nextElementSibling.nextElementSibling;
    const content = new DocumentFragment();
    const values = await data.getSucursal(getValue(tst));
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
