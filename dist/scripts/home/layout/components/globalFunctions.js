const el = tag => document.querySelector(tag);

const create = tag => document.createElement(tag);

const replace = (newElement, replaceElement) => document.body.replaceChild(newElement, replaceElement);

const getValue = key => () => localStorage.getItem(key) || "";

const setValue = key => e => localStorage.setItem(key, e.target.value);
const setItem = (key, value) => localStorage.setItem(key, value);

const createButton = (type, text) => {
  const button = create("button");
  button.type = type;
  if (text !== null) button.textContent = text;
  return button;
}

export {
  el,
  create,
  replace,
  createButton,
  getValue,
  setValue,
  setItem
}
