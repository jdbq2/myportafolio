import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import HeroSvg from "../../assets/svg/HeroSvg/heroSvg";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Head from "../../components/Head/Head";
import "./home.scss";

const Home = () => {
  let title = useRef(null);
  let job = useRef(null);
  let svg = useRef(null);
  let github = useRef(null);
  let linkedin = useRef(null);
  let mail = useRef(null);

  useEffect(() => {
    gsap.from(title, {
      duration: 0.5,
      opacity: 0,
      y: -80,
      ease: "power3.inOut",
    });
    gsap.from(job, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      ease: "power3.inOut",
    });
    gsap.from(svg, {
      duration: 1,
      opacity: 0,
      x: 100,
      ease: "power3.inOut",
    });
    gsap.from([github, linkedin, mail], {
      duration: 1,
      opacity: 0,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div className="home">
      <Head
        pageTitle="Home"
        description="Pagina de inicio del portafolio de Juan Diego Bohorquez, desarrollador frontend"
      />
      <div className="home__hero">
        <div className="home__hero__title">
          <h1 ref={(el) => (title = el)} className="home__hero__title__name">
            Juan D.
          </h1>
          <h3 ref={(el) => (job = el)} className="home__hero__title__job">
            {"<Desarrollador Frontend/>"}
          </h3>
        </div>
        <figure ref={(el) => (svg = el)} className="home__hero__image">
          <HeroSvg />
        </figure>
      </div>
      <div className="home__socialmedia">
        <a
          ref={(el) => (github = el)}
          href="https://github.com/jdbq2"
          target="_blank"
          className="home__socialmedia__icon"
        >
          <i>
            <AiOutlineGithub />
          </i>
        </a>
        <a
          ref={(el) => (linkedin = el)}
          href="https://www.linkedin.com/in/juan-diego-bohorquez-a47255b1/"
          target="_blank"
          className="home__socialmedia__icon"
        >
          <i>
            <AiFillLinkedin />
          </i>
        </a>
        <a
          ref={(el) => (mail = el)}
          href="mailto:jdbq2@hotmail.com"
          className="home__socialmedia__icon"
        >
          <i>
            <GrMail />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Home;
