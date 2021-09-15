import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { TelegramLogo } from '../Icons/icons';
import { types } from '../../constants/formTypes.constant';
import routes from '../../constants/routes.constant';
import { validationSignUp } from '../../helpers/formValidation.helper';
import { useAuth } from '../../hooks/useAuth.hook';

import classes from './Register.module.css';

function Register() {
  const { signup } = useAuth();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: validationSignUp,

    onSubmit: () => {
      signup(formik.values)
        .then((res) => {
          history.replace(routes.main().route);
        })
        .catch((e) => alert(e.message));
    },
  });

  return (
    <div className={classes.formContainer}>
      <div className={classes.logo}>
        <TelegramLogo />
      </div>
      <h1 className={classes.loginFormTitle}>Sign Up to Telegram</h1>

      <Link to={routes.login().route}>Login</Link>

      <form onSubmit={formik.handleSubmit}>
        <Input
          id={types.input.name.id}
          name={types.input.name.name}
          type={types.input.name.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          label={types.input.name.label}
          className={classes.loginBtn}
          variant={'primary'}
          autoFocus
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={classes.errorMessage}>{formik.errors.name}</div>
        ) : null}
        <Input
          id={types.input.surname.id}
          name={types.input.surname.name}
          type={types.input.surname.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          label={types.input.surname.label}
          variant={'primary'}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div className={classes.errorMessage}>{formik.errors.surname}</div>
        ) : null}
        <Input
          id={types.input.email.id}
          name={types.input.email.name}
          type={types.input.email.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label={types.input.email.label}
          variant={'primary'}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={classes.errorMessage}>{formik.errors.email}</div>
        ) : null}
        <Input
          id={types.input.password.id}
          name={types.input.password.name}
          type={types.input.password.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label={types.input.password.label}
          variant={'primary'}
          autocomplete=''
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={classes.errorMessage}>{formik.errors.password}</div>
        ) : null}
        <Input
          id={types.input.repeatPassword.id}
          name={types.input.repeatPassword.name}
          type={types.input.repeatPassword.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          label={types.input.repeatPassword.label}
          variant={'primary'}
          autocomplete=''
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className={classes.errorMessage}>{formik.errors.repeatPassword}</div>
        ) : null}

        <Button type={types.button.type} btnName={types.button.name} className={classes.loginBtn} />
      </form>
    </div>
  );
}

export default Register;
