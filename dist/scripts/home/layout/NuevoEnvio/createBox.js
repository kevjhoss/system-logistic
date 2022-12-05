import {el,create,createButton,replace} from '../components/globalFunctions.js';
import {next} from './actionButton.js';
import {Progress} from '../NuevoEnvio/components/progress.js';
customElements.define("progress-barra", Progress);
export const renderLayout = async () => {
  const {FormOrigin} = await import('./FormOrigin/createShadow.js')
  if (customElements.get("content-origin") === undefined) customElements.define("content-origin", FormOrigin);
  const section = create("section");
  const form = create("form");
  form.id = "box-envio";
  form.classList.add("l-origin");
  form.addEventListener("submit", e => {e.preventDefault()});
  const btnNext = createButton("button", "Siguiente");
  btnNext.classList.add("btn--action", "btn-action--text", "btn-next--grid");
  btnNext.addEventListener("click", next);
  form.appendChild(new FormOrigin);
  form.appendChild(btnNext);
  section.appendChild(new Progress("is-active-origen"));
  section.appendChild(form);
  replace(section, el("section"));
}
