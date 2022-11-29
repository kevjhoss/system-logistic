import {create} from '../../components/globalFunctions.js';

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
  for (const province of data.options) {
    const option = create("option");
    option.value = province.name_province;
    option.textContent = province.name_province;
    select.appendChild(option);
  }
  return select
}

export {
  createSelect
}
