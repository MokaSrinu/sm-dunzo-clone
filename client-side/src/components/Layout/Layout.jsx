import React from "react";
import classes from "./Layout.module.scss";
import { LayoutFooter, TopNavbar } from "../molecules";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className={classes.Layout__Container}>
      <TopNavbar />
      <Outlet />
      <LayoutFooter />
    </div>
  );
};

export default Layout;
