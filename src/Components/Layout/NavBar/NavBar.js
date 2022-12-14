import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
const NavBar = (props) => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <a className={classes.a}  href="/">HOME</a >
        <a className={classes.a} href="/store">STORE</a >
        <NavLink activeClassName={classes.a} to="/AboutUs">ABOUT</NavLink >
        
      </nav>
    </Fragment>
  );
};
export default NavBar;
