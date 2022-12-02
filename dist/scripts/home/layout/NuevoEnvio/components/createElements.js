import {create,getValue} from '../../components/globalFunctions.js';

const createSelect = (data, tst) => {
  const select = create("select");
  select.name = data.name;
  select.addEventListener("click", data.keyUp);
  const option = create("option");
  option.setAttribute("selected","");
  option.setAttribute("disabled","");
  option.setAttribute("hidden","");
  option.value = "";
  option.textContent = "Seleccionar....";
  if (data.text() !== "") option.textContent = data.text();
  select.appendChild(option);

  if (data.getProvinces === undefined) return select;

  for (const province of data.getProvinces) {
    const option = create("option");
    option.value = province.name_province;
    option.textContent = province.name_province;
    select.appendChild(option);
  }

  if (data.getSucursal === undefined) return select

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
  return select
}

export {
  createSelect
}
