import React from "react";
import "./bio.scss";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiReactrouter, SiRedux, SiGreensock, SiWebpack } from "react-icons/si";
const Bio = () => {
  const tecnologies = [
    {
      icon: <AiOutlineHtml5 />,
      name: "HTML 5",
      percent: "90%",
    },
    {
      icon: <DiCss3 />,
      name: "CSS 3",
      percent: "80%",
    },
    {
      icon: <DiSass />,
      name: "Sass",
      percent: "80%",
    },
    {
      icon: <DiJavascript1 />,
      name: "JavaScript",
      percent: "60%",
    },
    {
      icon: <DiReact />,
      name: "React",
      percent: "60%",
    },
    {
      icon: <SiReactrouter />,
      name: "React Router",
      percent: "50%",
    },
    {
      icon: <SiRedux />,
      name: "React Redux",
      percent: "60%",
    },
    {
      icon: <SiGreensock />,
      name: "Gsap",
      percent: "50%",
    },
    {
      icon: <DiGit />,
      name: "Git",
      percent: "50%",
    },
    {
      icon: <SiWebpack />,
      name: "Webpack",
      percent: "30%",
    },
  ];
  return (
    <div className="sobremi">
      <h1 className="sobremi__title">{"< Sobre Mi />"}</h1>
      <p className="sobremi__info">
        <span>¡Hola!</span>, me llamo Juan Diego, y soy un{" "}
        <span>desarrollador frontend</span> de 29 años, estudiante de ingenieria
        de software, apasionado por el internet y la tecnologia.
      </p>
      <h2 className="sobremi__tecnologies">Tengo habilidades en...</h2>
      <div className="sobremi__data">
        {tecnologies.map(({ icon, name, percent }) => (
          <div key={name} className="sobremi__data__container">
            <div className="sobremi__data__container__name">
              <i className="sobremi__data__container__name__icon">{icon}</i>
              <h3 className="sobremi__data__container__name__title">{name}</h3>
            </div>
            <div className="sobremi__data__container__bar">
              <div
                className="sobremi__data__container__bar__percent"
                style={{ width: percent }}
              >
                {percent}
              </div>
            </div>
          </div>
        ))}
        <h2 className="sobremi__slogan">
          ¿Tienes algun proyecto en mente?{" "}
          <a href="mailto:jdbq2@hotmail.com">¡conversemos!</a>
        </h2>
      </div>
    </div>
  );
};

export default Bio;
