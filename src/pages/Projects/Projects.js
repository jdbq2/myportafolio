import React, { useEffect, useRef } from "react";
import "./projects.scss";
import ShowProject from "../../components/ShowProject/ShowProject";
import LandingImage from "../../assets/png/landing_page.png";
import PwaImage from "../../assets/png/countries_app.png";
import PortafolioImage from "../../assets/png/portafolio.png";
import Head from "../../components/Head/Head";
import gsap from "gsap";

const Projects = () => {
  let title = useRef(null);
  let text = useRef(null);
  let projectContainer = useRef(null);
  const project = [
    {
      title: "Landing Page",
      image: LandingImage,
      tecnologies: [
        "Parcel",
        "Html5",
        "Sass",
        "Javascript",
        "Gsap",
        "ScrollTrigger",
      ],
      text:
        "Diseño 100% responsive, animaciones realizadas con Gsap y controladas por ScrollTrigger, implementacion de estilos por medio de Sass bajo metodologia BEM, contiene mixins, listas, variables, funciones y placeholders. Javascript modularizado. El bundle final fue realizado por medio de parcel, haciendo uso de Babel.",
      codeLink: "https://github.com/jdbq2/landing-page",
      liveLink: "https://jdbq2.github.io/landing-page/",
    },
    {
      title: "Countries PWA",
      image: PwaImage,
      tecnologies: [
        "Parcel",
        "React",
        "Redux",
        "React Router",
        "Thunks",
        "Sass",
        "Gsap",
      ],
      text:
        "Diseño 100% responsive, animaciones realizadas con Gsap, manejo de rutas con React router, incluye rutas dinamicas, loaders y manejo de errores, implementacion de estilos por medio de Sass bajo metodologia BEM. Uso de React Hooks y React Redux para el manejo de estados. Se realiza uso de thunks para codigo asincronico y configuracion del sevice worker al igual que el manifest para generar la PWA. El bundle final fue realizado por medio de parcel, haciendo uso de Babel.",
      codeLink: "https://github.com/jdbq2/countries-react-app",
      liveLink: "https://jdbq2.github.io/countries-react-app/#/",
    },
    {
      title: "Portafolio",
      image: PortafolioImage,
      tecnologies: [
        "Webpack",
        "React",
        "React Router",
        "Sass",
        "Gsap",
        "ScrollTrigger",
      ],
      text:
        "Diseño 100% responsive, animaciones realizadas con Gsap, manejo de rutas con React router, incluye manejo de errores, implementacion de estilos por medio de Sass bajo metodologia BEM. incluye tambien el Uso de React Hooks. El bundle final fue realizado por medio de webpack, haciendo uso de Babel y demas plugins.",
      codeLink: "https://github.com/jdbq2/myportafolio",
      liveLink: "https://jdbq2.github.io/myportafolio/#/",
    },
  ];

  useEffect(() => {
    gsap.from([title, text, projectContainer], {
      duration: 1.5,
      opacity: 0,
      y: 100,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);
  return (
    <div className="projects">
      <Head
        pageTitle="Proyectos"
        description="Pagina de inicio del portafolio de Juan Diego Bohorquez, desarrollador frontend"
      />
      <h1 ref={(el) => (title = el)} className="projects__title">
        {"<Mis_Proyectos/>"}
      </h1>
      <p ref={(el) => (text = el)} className="projects__text">
        Aqui podras ver una muestra de los proyectos que he desarrollado,
        tendras acceso al codigo y al live demo.
      </p>
      <div
        ref={(el) => (projectContainer = el)}
        className="projects__container"
      >
        {project.map(
          ({ title, image, text, tecnologies, codeLink, liveLink }) => (
            <ShowProject
              key={codeLink}
              title={title}
              image={image}
              text={text}
              tecnologies={tecnologies}
              codeLink={codeLink}
              liveLink={liveLink}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
