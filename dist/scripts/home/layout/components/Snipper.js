export const snipper = (name) => {
  const section = document.createElement("section");
  section.id = "box-snipper";
  const div = document.createElement("div");
  div.classList.add(name);
  section.appendChild(div);
  return section;
}
