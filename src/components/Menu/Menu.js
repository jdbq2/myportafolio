import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./menu.scss";
const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  let menuList = useRef(null);
  let homeLink = useRef(null);
  let bioLink = useRef(null);
  let projectLink = useRef(null);
  let bar1 = useRef(null);
  let bar2 = useRef(null);
  let bar3 = useRef(null);
  let bar4 = useRef(null);

  const showMenu = () => {
    setClicked(!clicked);
    disabledButton();
  };

  const disabledButton = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    clicked
      ? (tl.to(menuList, {
          duration: 0.5,
          ease: "power3.inOut",
          css: { display: "flex", opacity: 1 },
        }),
        tl.to([homeLink, bioLink, projectLink], {
          duration: 0.5,
          ease: "Circ.inOut",
          css: { opacity: 1 },
          stagger: {
            amount: 0.3,
          },
        }),
        gsap.to(bar1, {
          duration: 0.3,
          ease: "power3.inOut",
          y: -100,
          opacity: 0,
        }),
        gsap.to(bar4, {
          duration: 0.3,
          ease: "power3.inOut",
          y: 100,
          opacity: 0,
        }),
        gsap.to(bar2, {
          duration: 0.3,
          ease: "power3.inOut",
          rotate: "45deg",
        }),
        gsap.to(bar3, {
          duration: 0.3,
          ease: "power3.inOut",
          rotate: "-45deg",
        }),
        (document.getElementsByTagName("html")[0].style.overflow = "hidden"))
      : (tl.to([projectLink, bioLink, homeLink], {
          duration: 0.5,
          ease: "Circ.inOut",
          css: { opacity: 0 },
          stagger: {
            amount: 0.3,
          },
        }),
        tl.to(menuList, {
          duration: 0.5,
          ease: "power3.inOut",
          css: { display: "none", opacity: 0 },
        }),
        gsap.to(bar1, {
          duration: 0.3,
          ease: "power3.inOut",
          y: 0,
          opacity: 1,
        }),
        gsap.to(bar4, {
          duration: 0.3,
          ease: "power3.inOut",
          y: 0,
          opacity: 1,
        }),
        gsap.to(bar2, {
          duration: 0.3,
          ease: "power3.inOut",
          rotate: "0deg",
        }),
        gsap.to(bar3, {
          duration: 0.3,
          ease: "power3.inOut",
          rotate: "0deg",
        }),
        (document.getElementsByTagName("html")[0].style.overflow = "auto"));
  }, [clicked]);
  return (
    <nav className="menu">
      <button className="menu__button" disabled={disabled} onClick={showMenu}>
        <div
          ref={(e) => {
            bar1 = e;
          }}
          className="menu__button__bar1"
        ></div>
        <div
          ref={(e) => {
            bar2 = e;
          }}
          className="menu__button__bar2"
        ></div>
        <div
          ref={(e) => {
            bar3 = e;
          }}
          className="menu__button__bar3"
        ></div>
        <div
          ref={(e) => {
            bar4 = e;
          }}
          className="menu__button__bar4"
        ></div>
      </button>
      <ul
        ref={(e) => {
          menuList = e;
        }}
        className="menu__links"
        id="nav"
      >
        <li
          ref={(e) => {
            homeLink = e;
          }}
          onClick={showMenu}
        >
          <Link to="/">Inicio</Link>
        </li>
        <li
          ref={(e) => {
            bioLink = e;
          }}
          onClick={showMenu}
        >
          <Link to="/sobremi">Sobre mi</Link>
        </li>
        <li
          ref={(e) => {
            projectLink = e;
          }}
          onClick={showMenu}
        >
          <Link to="/proyectos">Proyectos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
