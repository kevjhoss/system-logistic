import {getHtml} from './fetchingData.js';

const addEvents = (element, section) => {
  element.addEventListener("click", async e => {
    e.preventDefault();
    const li = e.target.parentNode;
    const a = e.target;
    if (li.nodeName === "LI" && a.nodeName === "A") {
      element.childNodes.forEach(el => {
        if (el.nodeName === "LI") el.classList.remove("active-link");
      });
      section.innerHTML = "<div class='snipper'></div>"
      li.classList.add("active-link");
      section.innerHTML = await getHtml(a.classList.value);
    };
  });
};

export {
  addEvents
}
