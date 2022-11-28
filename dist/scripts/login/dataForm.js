import {validateGmail, validatorPassword} from './validator.js';
import togglePassword from './togglePassword.js';

const signUp = [
  {
    placeholder: "Ingrese su Nombre Completo",
    nameInput: "full-name",
    type: "text",
    nameIcon: "user"
  },
  {
    placeholder: "Ingrese su Numero de Documento",
    nameInput: "document-number",
    type: "text",
    nameIcon: "dni"
  },
  {
    placeholder: "Ingrese su Dirreccion",
    nameInput: "dirrection",
    type: "text",
    nameIcon: "dirrection",
  },
  {
    placeholder: "Ingrese su Localidad",
    nameInput: "location",
    type: "text",
    nameIcon: "location"
  },
  {
    placeholder: "Ingrese su Provincia",
    nameInput: "province",
    type: "text",
    nameIcon: "province",
  },
  {
    placeholder: "Ingrese su Codigo Postal",
    nameInput: "code-postal",
    type: "text",
    nameIcon: "cp"
  },
  {
    placeholder: "Ingrese su Telefono",
    nameInput: "phone",
    type: "tel",
    nameIcon: "phone"
  },
  {
    placeholder: "Ingrese su Correo Electronico",
    nameInput: "email",
    type: "text",
    nameIcon: "email",
    validator: validateGmail
  },
  {
    placeholder: "Ingrese su Contraseña",
    nameInput: "password",
    type: "password",
    nameIcon: "password",
    validator: validatorPassword,
    toggleIcon: togglePassword
  },
]

const login = [
  {
    placeholder: "Ingrese su usuario...",
    nameInput: "user",
    type: "text",
    nameIcon: "user",
    validator: validateGmail
  },
  {
    placeholder: "Ingrese su contraseña...",
    nameInput: "password",
    type: "password",
    nameIcon: "password",
    validator: validatorPassword,
    toggleIcon: togglePassword
  },
];

export {
  signUp,
  login
}
