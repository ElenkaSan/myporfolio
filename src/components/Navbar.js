import React from "react";
import $ from "jquery";
import Switch from '@mui/joy/Switch';
import DarkMode from '@mui/icons-material/DarkMode';
// import LightMode from '@mui/icons-material/LightMode';
import logo from "../img/logo.png";
import sakuranav from "../img/sakuranav.png";
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import Sidebar from './Sidebar';
import styles from '../styles/NavBar.module.css';
// import '../styles/style.css';

const Navbar = ({ themeToggler }) => {
    const [open, setOpen] = useState(false);
  
    const menuIcon = (
        <FiMenu className={styles.menuBtn} color='#121212' onClick={() => setOpen(!open)} />
      );

      const menuSwitch = (
        <DarkMode className="text-dark" onClick={() => setOpen(!open)} />
      );
    
      const closeIcon = (
        <RiCloseFill className={styles.menuBtn} color='#121212' onClick={() => setOpen(!open)} />
      );

    //   const closeSwitch = (
    //     <LightMode  className="text-warning"  onClick={() => setOpen(!open)}/>
    //   );
    
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
        style={{ backgroundImage: "url(" + sakuranav + ")" }} >
        <div className="container"> 
          <a className="navbar-brand js-scroll" href="#home">
            <img
              src={state.logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
            />
          </a>
          <Sidebar open={open} setOpen={setOpen} themeToggler={themeToggler} />
         <div className="card bg-info">{open ? closeIcon : menuIcon}</div>
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
            <ul className="" htmlFor="theme-switcher">
      <Switch onClick={() => themeToggler()} open={open} setOpen={setOpen}
    //   type="checkbox"
    //   id="theme-switcher"
    //   name="theme-switcher"
    //   className="btn"
      componentsProps={{
        // input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: menuSwitch
        //    open ? closeSwitch : menuSwitch,
        },
      }}
      sx={{
        '--Switch-thumb-size': '28px',
      }}
      /> </ul>
      </div>
      </div>
      </nav>
      </div>
    );
}

export default Navbar;