import React from "react";
import { Helmet } from "react-helmet";
import favicon from "../../assets/favicon.ico";
const Head = ({ pageTitle, description }) => {
  return (
    <Helmet>
      <title>{`${pageTitle} | 💻 Juan D. Portafolio`}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" type="image/ico" href={favicon} />
    </Helmet>
  );
};

export default Head;
