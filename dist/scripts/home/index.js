const el = tag => document.querySelector(tag);
const panel = el(".panel");
const envio = el(".envio");
const cuenta = el(".cuenta");
const misEnvios = el(".mis_envios");
const section = el("section");

const getHtml = async (page) => {
  const data = await fetch(`index.php?controller=User&action=${page}`);
  const value = await data.text();
  return value;
}

const ul = el("nav > ul");
ul.addEventListener("click", async (e) => {
  e.preventDefault();
  const li = e.target.parentNode;
  if (li.nodeName === 'LI' && e.target.nodeName === 'A') {
    ul.childNodes.forEach(el => {
      if (el.nodeName === 'LI') el.classList.remove("active-link");
    });
    section.innerHTML = "<div class='snipper'></div>";
    li.classList.add("active-link");
    section.innerHTML = await getHtml(e.target.classList.value);
  }
})
