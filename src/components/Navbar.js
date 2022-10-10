import React from "react";
import $ from "jquery";
import logo from "../img/logo.png";
// import sakuranav from "../img/sakuranav.png";
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import Sidebar from './Sidebar';
import styles from '../styles/NavBar.module.css';
import {FaMoon} from "react-icons/fa";
import {ImSun} from "react-icons/im";

const Navbar = ({ themeToggler }) => {
    const [open, setOpen] = useState(false);
    const [touch, setTouch] = useState(false);
  
    const menuIcon = (
        <FiMenu className={styles.menuBtn} color='#121212' onClick={() => setOpen(!open)} />
      );
    
      const closeIcon = (
        <RiCloseFill className={styles.menuBtn} color='#121212' onClick={() => setOpen(!open)} />
      );

      const menuSwitch = (
        <FaMoon className="text-dark display-6" onClick={() => setTouch(!touch)} />
      );

      const lightSwitch = (
        <ImSun className="text-warning display-6" onClick={() => setTouch(!touch)} />
      );


    const state = { logo: logo };

    const componentDidMount=()=> {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ logo: logo });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }
 
  
    return (
        <div>
          {componentDidMount}
        <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top shadow-lg p-3 mb-5 bg-white rounded"
        style={{ background: "linear-gradient(160deg,  #34174c 10%, #084e63 70%)" }} 
        // style={{ background: "linear-gradient(160deg,  #08a993 10%, #94734e 50%)" }} 
        // style={{ background: "linear-gradient(160deg,  #00fcda 1%, #e0b27e 50%)" }} 
        // style={{ backgroundImage: "url(" + sakuranav + ")" }} 
        >
        <div className="container"> 
          <a className="navbar-brand js-scroll" href="#home">
            <img
              src={state.logo}
              alt="logo"
              style={{ maxWidth: "80px" }}
            />
          </a>
          <Sidebar open={open} setOpen={setOpen} touch={touch} setTouch={setTouch} themeToggler={themeToggler} />
         <div className="card bg-info">{open ? closeIcon : menuIcon} </div>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Elena Nurullina
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="display-6" htmlFor="theme-switcher">
              <button className="btn" onClick={() => themeToggler()}
                      type="checkbox"
                      id="theme-switcher"
                      name="theme-switcher"> {touch ? lightSwitch : menuSwitch}
              </button>
            </ul>
      </div>
      </div>
      </nav>
      </div>
    );
}

export default Navbar;
