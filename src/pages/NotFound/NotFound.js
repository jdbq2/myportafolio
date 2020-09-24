import React from "react";
import NotFoundSvg from "../../assets/svg/NotFoundSvg/NotFoundSvg";
import "./notfound.scss";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__title">{"<Página no encontrada/>"}</h1>
      <figure className="notfound__image">
        <NotFoundSvg />
      </figure>
    </div>
  );
};

export default NotFound;
