import { snipper } from './layout/components/Snipper.js';
import { el, setItem, replace } from './layout/components/globalFunctions.js';
import { getUserData } from './layout/fetchingData.js';

const menu = el("nav > ul");

const refresh = async (li) => {
  replace(snipper("snipper"), el("section"));
  menu.childNodes.forEach(el => {
    if (el.nodeName === "LI") el.classList.remove("active-link");
  });
  li.classList.add("active-link");
  localStorage.clear();
  const data = await getUserData();
  setItem("id_cliente", data.id_cliente);
  setItem("email", data.correo_electronico);
  setItem("full-name", data.nombre_cliente);
  setItem("domicilio", "is-active");
};

const render = async (file) => {
  const { renderLayout } = await import(file);
  return renderLayout();
};

menu.addEventListener("click", async e => {
  e.preventDefault();
  const li = e.target.parentNode;
  const a = e.target;
  if (li.nodeName !== "LI" && a.nodeName !== "A") return null;
  if (a.innerText === "Cerrar Sesion") return location.href = "index.php?controller=User&exit=true";

  refresh(li);
  if (a.innerText === "Inicio") render("./layout/Inicio/createBox.js");

  if (a.innerText === "Nuevo Envio") render("./layout/NuevoEnvio/createBox.js");

  if (a.innerText === "Mis Envios") render("./layout/MisEnvios/createBox.js");

  if (a.innerText === "Mi Cuenta") render("./layout/MiCuenta/createBox.js");
});
