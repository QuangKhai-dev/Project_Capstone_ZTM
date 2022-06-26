import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.jsx";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUsers } from "../../utils/firebase/firebase.util";
import CardIcon from "../../components/CardIcon/CardIcon";
import CardDropdown from "../../components/CardDropdown/CardDropdown";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
} from "./navigation.styles.jsx";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUsers}>
              SignOut
            </NavLink>
          ) : (
            <NavLink to="/signIn">SignIn</NavLink>
          )}
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
