import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import {
  createUserDocumentFormAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";
import "./signInForm.styles.scss";
const defaultFormFields = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //Reset form
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  // Tải dữ liệu lên sever
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormField();
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have account</h2>
      <span>Sign Ip with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button button_type="google-sign-in" onClick={signInWithGoogle}>
            Sign In Google
          </Button>
        </div>
      </form>
    </div>
  );
}
