import React from "react";
import { useFormik } from "formik";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { Arrow } from "../Icons/icons";
import { types } from "../../constants/formTypes.constant";
import { validationSignUp } from "../../helpers/formValidation.helper";

import classes from "./EditProfile.module.css";

function EditProfile({ setIsEditProfileOpen }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSignUp,

    onSubmit: () => {},
  });

  const handleBackBtn = () => {
    setIsEditProfileOpen(false);
  };
  return (
    <div className={classes.editProfile}>
      <div className={classes.editProfileHeader}>
        <Button
          btnName={<Arrow />}
          className={classes.backBtn}
          onClick={handleBackBtn}
        />
        <p className={classes.headerTitle}>Edit Profile</p>
      </div>
      <div className={classes.editProfileAvatar}>Choose Avatar</div>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id={types.input.name.id}
          name={types.input.name.name}
          type={types.input.name.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          label={types.input.name.label}
          className={classes.inputEvent}
          variant={"secondary"}
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
          variant={"secondary"}
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
          variant={"secondary"}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={classes.errorMessage}>{formik.errors.email}</div>
        ) : null}
        <Input
          id={types.input.newPassword.id}
          name={types.input.newPassword.name}
          type={types.input.newPassword.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          label={types.input.newPassword.label}
          variant={"secondary"}
          autocomplete=""
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={classes.errorMessage}>{formik.errors.password}</div>
        ) : null}
        <Input
          id={types.input.repeatNewPassword.id}
          name={types.input.repeatNewPassword.name}
          type={types.input.repeatNewPassword.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.repeatPassword}
          label={types.input.repeatNewPassword.label}
          variant={"secondary"}
          autocomplete=""
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className={classes.errorMessage}>
            {formik.errors.repeatPassword}
          </div>
        ) : null}

        <Button
          type={types.button.type}
          btnName={types.button.name}
          className={classes.inputEvent}
        />
      </form>
    </div>
  );
}

export default EditProfile;
