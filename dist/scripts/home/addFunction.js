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
      const {panel} = await import("./components/section.js");
      document.body.replaceChild(panel(a.innerText), document.querySelector("section"));
    };
  });
};

export {
  addEvents
}
