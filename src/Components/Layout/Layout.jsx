import React from "react";
import NavbarLayout from "./NavbarLayout";
import { Outlet } from "react-router-dom";
import FooterLayout from "./FooterLayout";

function Layout() {
  return (
    <>
      <NavbarLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}

export default Layout;
