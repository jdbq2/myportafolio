import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ pageTitle, description }) => {
  return (
    <Helmet>
      <title>{`${pageTitle} | 💻 Juan D. Portafolio`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
