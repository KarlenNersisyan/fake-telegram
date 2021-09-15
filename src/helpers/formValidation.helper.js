import * as Yup from "yup";
import { types } from "../constants/formTypes.constant";

const validationLogin = Yup.object({
  email: Yup.string()
    .email(types.input.email.error.validEmail)
    .required(types.input.email.error.emailRequired),
  password: Yup.string()
    .required(types.input.password.error.passRequired)
    .min(8, types.input.password.error.passMinLength),
});

const validationSignUp = Yup.object({
  name: Yup.string()
    .max(30, types.input.name.error.nameMaxLength)
    .required(types.input.name.error.nameRequired)
    .min(2, types.input.name.error.nameMinLength),
  surname: Yup.string()
    .max(30, types.input.surname.error.surnameMaxLength)
    .required(types.input.surname.error.surnameRequired)
    .min(2, types.input.surname.error.surMinLength),
  email: Yup.string()
    .email(types.input.email.error.validEmail)
    .required(types.input.email.error.emailRequired),
  password: Yup.string()
    .required(types.input.password.error.passRequired)
    .min(8, types.input.password.error.passMinLength),
  repeatPassword: Yup.string()
    .required(types.input.repeatPassword.error.repeatPassRequired)
    .oneOf(
      [Yup.ref(types.input.password.id), null],
      types.input.repeatPassword.error.passMustMatch
    ),
});

export { validationSignUp, validationLogin };
