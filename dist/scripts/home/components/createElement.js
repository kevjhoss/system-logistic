const getElement = tag => document.querySelector(tag);
const create = tag => document.createElement(tag);

const createButton = (content, call) => {
  const button = create("button");
  button.textContent = content;
  if (call !== undefined) button.addEventListener("click", call);
  return button;
}

export {
  create,
  getElement,
  createButton
}
