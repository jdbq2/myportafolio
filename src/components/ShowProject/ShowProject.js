import React from "react";
import "./showproject.scss";

const ShowProject = ({
  title,
  image,
  text,
  tecnologies,
  codeLink,
  liveLink,
}) => {
  return (
    <div className="showproject">
      <h1 className="showproject__title">{title}</h1>
      <ul className="showproject__tecnologies">
        {tecnologies.map((tecno) => (
          <li>{tecno}</li>
        ))}
      </ul>
      <figure className="showproject__image">
        <img src={image} alt={title} />
      </figure>
      <p className="showproject__text">{text}</p>

      <div className="showproject__buttoncontainer">
        <a
          className="showproject__buttoncontainer__button"
          href={codeLink}
          target="_blank"
        >
          Github Code
        </a>

        <a
          className="showproject__buttoncontainer__button"
          href={liveLink}
          target="_blank"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ShowProject;
