import {create,getValue} from '../../components/globalFunctions.js';

const createSelect = data => {
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

  if (data.options === undefined && data.function === undefined) return select;

  for (const datas of data.options) {
    const option = create("option");
    option.value = datas.name_province;
    option.textContent = datas.name_province;
    select.appendChild(option);
  }

  if (data.function === undefined) return select

  select.addEventListener("click", async () => {
    const sucursal = select.nextElementSibling.nextElementSibling;
    const content = new DocumentFragment();
    const values = await data.function(getValue("provincia-origen"));
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
