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
        const {renderLayout} = await import("./layout/Inicio/createBox.js");
        return renderLayout()
      }
      if (a.innerText === "Nuevo Envio") {
        const {renderLayout} = await import("./layout/NuevoEnvio/createBox.js");
        return renderLayout();
      }
      if (a.innerText === "Mis Envios") {
        const {renderLayout} = await import("./layout/MisEnvios/createBox.js");
        return renderLayout()
      }
      if (a.innerText === "Mi Cuenta") {
        const {renderLayout} = await import("./layout/MiCuenta/createBox.js");
        return renderLayout()
      }
    };
  });
};

export {
  addEvents
}
