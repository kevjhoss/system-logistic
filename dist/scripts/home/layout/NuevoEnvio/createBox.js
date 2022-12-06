import {el,create,createButton,replace} from '../components/globalFunctions.js';
import {actionNext} from './actionButton.js';
import {Progress} from '../NuevoEnvio/components/progress.js';
customElements.define("progress-barra", Progress);

const validate = (content) => customElements.get(content) === undefined;

export const renderLayout = async () => {
  const {FormOrigin} = await import('./FormOrigin/createShadow.js')
  if (validate("content-origin")) customElements.define("content-origin", FormOrigin);
  const section = create("section");
  const form = create("form");
  form.id = "box-envio";
  form.classList.add("l-origin");
  const btnNext = createButton("button", "Siguiente");
  btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
  btnNext.addEventListener("click", actionNext);
  form.appendChild(new FormOrigin);
  form.appendChild(btnNext);
  section.appendChild(new Progress("is-active-origen"));
  section.appendChild(form);
  replace(section, el("section"));
}
