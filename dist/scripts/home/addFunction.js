import {snipper} from './layout/components/Snipper.js';
import {el} from './layout/components/globalFunctions.js';

const addEvents = async (element) => {
  element.addEventListener("click", async e => {
    e.preventDefault();
    const li = e.target.parentNode;
    const a = e.target;
    if (li.nodeName === "LI" && a.nodeName === "A") {
      element.childNodes.forEach(el => {
        if (el.nodeName === "LI") el.classList.remove("active-link");
      });
      li.classList.add("active-link");
      if (a.innerText === "Inicio") {
        localStorage.clear();
        localStorage.setItem("domicilio", "is-active");
        const {renderLayout} = await import("./layout/Inicio/createBox.js");
        return renderLayout()
      }
      if (a.innerText === "Nuevo Envio") {
        document.body.replaceChild(snipper("snipper"), el("section"));
        localStorage.clear();
        localStorage.setItem("domicilio", "is-active");
        const {renderLayout} = await import("./layout/NuevoEnvio/createBox.js");
        return renderLayout();
      }
      if (a.innerText === "Mis Envios") {
        localStorage.clear();
        localStorage.setItem("domicilio", "is-active");
        const {renderLayout} = await import("./layout/MisEnvios/createBox.js");
        return renderLayout()
      }
      if (a.innerText === "Mi Cuenta") {
        localStorage.clear();
        localStorage.setItem("domicilio", "is-active");
        const {renderLayout} = await import("./layout/MiCuenta/createBox.js");
        return renderLayout()
      }
    };
  });
};

export {
  addEvents
}
