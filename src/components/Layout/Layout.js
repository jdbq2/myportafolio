import React, { children } from "react";
import Header from "./Nav/Header";
import Footer from "./Footer/footer";

const Layout = ({ children, theme, themeState }) => {
  return (
    <>
      <Header theme={theme} themeState={themeState} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
