import React, { useEffect, useRef } from "react";
import "./bio.scss";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiSass, DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiReactrouter, SiRedux, SiGreensock, SiWebpack } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Head from "../../components/Head/Head";
const Bio = () => {
  let html5 = useRef(null);
  let css3 = useRef(null);
  let scss = useRef(null);
  let js = useRef(null);
  let rct = useRef(null);
  let rtr = useRef(null);
  let rdx = useRef(null);
  let sap = useRef(null);
  let gt = useRef(null);
  let webpck = useRef(null);
  let title = useRef(null);
  let text = useRef(null);
  let subtitle = useRef(null);
  let slogan = useRef(null);
  const tecnologies = [
    {
      icon: <AiOutlineHtml5 />,
      name: "HTML 5",
      percent: "90%",
      ref: (el) => (html5 = el),
    },
    {
      icon: <DiCss3 />,
      name: "CSS 3",
      percent: "80%",
      ref: (el) => (css3 = el),
    },
    {
      icon: <DiSass />,
      name: "Sass",
      percent: "80%",
      ref: (el) => (scss = el),
    },
    {
      icon: <DiJavascript1 />,
      name: "JavaScript",
      percent: "60%",
      ref: (el) => (js = el),
    },
    {
      icon: <DiReact />,
      name: "React",
      percent: "60%",
      ref: (el) => (rct = el),
    },
    {
      icon: <SiReactrouter />,
      name: "React Router",
      percent: "50%",
      ref: (el) => (rtr = el),
    },
    {
      icon: <SiRedux />,
      name: "React Redux",
      percent: "60%",
      ref: (el) => (rdx = el),
    },
    {
      icon: <SiGreensock />,
      name: "Gsap",
      percent: "50%",
      ref: (el) => (sap = el),
    },
    {
      icon: <DiGit />,
      name: "Git",
      percent: "50%",
      ref: (el) => (gt = el),
    },
    {
      icon: <SiWebpack />,
      name: "Webpack",
      percent: "30%",
      ref: (el) => (webpck = el),
    },
  ];
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    [html5, css3, scss, js, rct, rtr, rdx, sap, gt, webpck].forEach((el) => {
      gsap.from(el, {
        duration: 1.5,
        width: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
        },
      });
    });
    gsap.from([title, text, subtitle], {
      duration: 1.5,
      opacity: 0,
      y: 100,
      stagger: {
        amount: 0.5,
      },
    });
    gsap.from(slogan, {
      duration: 1.5,
      x: 300,
      opacity: 0,
      scrollTrigger: {
        trigger: slogan,
        start: "top 95%",
      },
    });
  }, []);
  return (
    <div className="sobremi">
      <Head
        pageTitle="Sobre mi"
        description="Informacion sobre Juan Diego Bohorquez, desarrollador frontend"
      />
      <h1 ref={(el) => (title = el)} className="sobremi__title">
        {"< Sobre_Mi />"}
      </h1>
      <p ref={(el) => (text = el)} className="sobremi__info">
        <span>¡Hola!</span>, me llamo Juan Diego, y soy un{" "}
        <span>desarrollador frontend</span> de 29 años, estudiante de ingenieria
        de software, apasionado por el internet y la tecnologia.
      </p>
      <h2 ref={(el) => (subtitle = el)} className="sobremi__tecnologies">
        Tengo conocimientos en...
      </h2>
      <div className="sobremi__data">
        {tecnologies.map(({ icon, name, percent, ref }) => (
          <div key={name} className="sobremi__data__container">
            <div className="sobremi__data__container__name">
              <i className="sobremi__data__container__name__icon">{icon}</i>
              <h3 className="sobremi__data__container__name__title">{name}</h3>
            </div>
            <div className="sobremi__data__container__bar">
              <div
                ref={ref}
                className="sobremi__data__container__bar__percent"
                style={{ width: percent }}
              >
                {percent}
              </div>
            </div>
          </div>
        ))}
        <h2 ref={(el) => (slogan = el)} className="sobremi__slogan">
          ¿Tienes algun proyecto en mente?{" "}
          <a href="mailto:jdbq2@hotmail.com">¡conversemos!</a>
        </h2>
      </div>
    </div>
  );
};

export default Bio;
