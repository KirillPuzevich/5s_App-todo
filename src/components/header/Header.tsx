import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import burger from "./img/burger.svg";
import logo from "./img/logo.svg";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      if (window.scrollY > headerHeight + 20) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header ref={headerRef} className={`header ${isFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="header__wrapper">
          <Link to="/" className="header__logo">
            <img className="header__logo-img" src={logo} alt="Логотип" />
          </Link>
          <button className="header__menu" onClick={toggleMenu}>
            <img className="header__menu-img" src={burger} alt="Меню" />
          </button>
          <div
            className={`header__overlay ${isOpen ? "open" : ""}`}
            onClick={closeMenu}
          ></div>
          <nav className={`header__nav ${isOpen ? "open" : ""}`}>
            {isOpen && (
              <button className="header__close" onClick={closeMenu}>
                X
              </button>
            )}
            <ul className="header__list">
              <li className="header__list-item">
                <Link className="header__link" to="/" onClick={closeMenu}>
                  Главная
                </Link>
              </li>
              <li className="header__list-item">
                <Link className="header__link" to="/tasks" onClick={closeMenu}>
                  Задачи 5S
                </Link>
              </li>
              <li className="header__list-item">
                <Link
                  className="header__link"
                  to="/contacts"
                  onClick={closeMenu}
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {!isFixed && <div className="header__divider"></div>}
      </div>
    </header>
  );
};
