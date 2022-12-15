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
  span.textContent = "La contraseña debe tener como mínimo 6 caracteres";
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
  span.textContent = "El documento debe contener 8 números";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length === 8 && /^[0-9]+$/i.test(input.value)) {
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
  span.textContent = "El codigo postal debe contener 4 números";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (/^[0-9]+$/i.test(input.value) && input.value.length === 4) {
    span.style.height = "0";
    return input.classList.remove("error");
  };

  span.style.height = "1.4em";
  input.classList.add("error");
};

const validatePhone = e => {
  const input = e.target;
  const span = input.nextElementSibling;
  span.textContent = "El numero de telefono debe contener al menos 8 números";
  if (input.value.length === 0) return span.textContent = "Campo requerido";

  if (/^[0-9]+$/i.test(input.value) !== true) span.textContent = "Solo se aceptan numeros";

  if (input.value.length > 7 && /^[0-9]+$/i.test(input.value)) {
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
