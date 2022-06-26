import React from "react";
import "./button.styles.jsx";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (button_type = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[button_type]);

export default function Button({ children, button_type, ...otherProps }) {
  const CustomButton = getButton(button_type);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
}
