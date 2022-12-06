const validateGmail = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El email ingresado es incorrecto...";
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.value)) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
};

const validatorPassword = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "La contrasena debe tener como minimo 5 carateceres";
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (input.value.length > 5) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
};

const validateFullName = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (input.value.length > 0) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
}

const validateDni = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de documento debe ser igual a 8";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length === 8 && /^[0-9]+/i.test(input.value)) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
}

const validateStandart = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  if (input.value.length === 0) span.textContent = "Campo requerido";

  if (input.value.length > 0) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
}

const validateCP = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de documento debe ser igual a 4";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length === 4 && /^[0-9]+/i.test(input.value)) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
};

const validatePhone = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de documento debe ser igual a 10";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length === 4 && /^[0-9]+/i.test(input.value)) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
}

export {
  validateGmail,
  validatorPassword,
  validateFullName,
  validateDni,
  validateStandart,
  validateCP,
  validatePhone
}
