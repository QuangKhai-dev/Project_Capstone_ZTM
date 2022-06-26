import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFormAuth,
} from "./../../utils/firebase/firebase.util";
import "./signUpForm.styles.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  //Reset form
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  // Tải dữ liệu lên sever
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("xac nhan mat khau khong dung");
      return;
    }
    try {
      const reponse = await createAuthUserWithEmailAndPassword(email, password);
      // console.log(reponse);
      await createUserDocumentFormAuth(reponse.user, { displayName });
      resetFormField();
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="DisplayName"
          type="text"
          onChange={handleOnChange}
          value={displayName}
          name="displayName"
          required
        />

        <FormInput
          label="Email"
          type="email"
          onChange={handleOnChange}
          value={email}
          required
          name="email"
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleOnChange}
          value={password}
          name="password"
          required
        />

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleOnChange}
          value={confirmPassword}
          name="confirmPassword"
          required
        />
        <Button button_type="google-sign-in" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}
