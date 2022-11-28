const el = tag => document.querySelector(tag);

const create = tag => document.createElement(tag);

const replace = (newElement, replaceElement) => document.body.replaceChild(newElement, replaceElement);

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
  createButton
}
