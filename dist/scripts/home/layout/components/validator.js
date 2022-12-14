const validateDni = e => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de documento debe ser igual a 8";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length === 8 && /^[0-9]+$/i.test(input.value)) {
    input.textContent = "0";
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };
  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
};

const validateCP = e => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de documento debe ser igual a 4";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (/^[0-9]+$/i.test(input.value) && input.value.length === 4) {
    input.textContent = "0";
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };

  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
};

const validateGmail = e => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El email ingresado es incorrecto...";
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.value)) {
    input.textContent = "0";
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };
  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
};

const validatePhone = e => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de celular debe ser igual o mayor a 6";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length >= 6 && /^[0-9]+$/i.test(input.value)) {
    input.textContent = "0";
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };

  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
};

const validateNumbers = (e) => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length > 0 && /^[0-9]+$/i.test(input.value)) {
    input.textContent = "0";
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };

  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
};

const validateStandart = e => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (input.value.length > 0) {
    input.textContent = "0"
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };

  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
}

const validatePassword = e => {
  const div = e.target.parentNode;
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "La contrasena debe tener como minimo 5 caracteres";
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (input.value.length > 5) {
    div.style.paddingBottom = ".4em";
    span.style.height = "0";
    return input.classList.remove("error");
  };
  input.textContent = "";
  div.style.paddingBottom = "1.8em";
  span.style.height = "1.8em";
  input.classList.add("error");
};

export {
  validateDni,
  validateCP,
  validateGmail,
  validatePhone,
  validateNumbers,
  validateStandart,
  validatePassword
}
