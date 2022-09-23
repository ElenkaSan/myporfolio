import sakura from "../img/sakura.jpeg";
// import Switch from "react-switch";
// import Switch from '@mui/joy/Switch';
// import LightMode from '@mui/icons-material/LightMode';
import styles from '../styles/Sidebar.module.css';

import {FaMoon} from "react-icons/fa";
import {ImSun} from "react-icons/im";

const Sidebar = ({ open, setOpen, themeToggler }) => {
  const menuSwitch = (
    <FaMoon className="text-dark display-6" onClick={() => setOpen(!open)} />
  );

  const lightSwitch = (
    <ImSun className="text-warning display-6" onClick={() => setOpen(!open)} />
  );


    return (
    <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`} style={{ backgroundImage: "url(" + sakura + ")" }} >
      <ul className="navbar-nav">
           <li htmlFor="theme-switcher">
              <button className="btn" onClick={() => themeToggler()}
                      type="checkbox"
                      id="theme-switcher"
                      name="theme-switcher"> {open ? lightSwitch : menuSwitch}
              </button>
            </li>
        <li className="navbar-nav">
          <a className="nav-link js-scroll" href="#about" onClick={() => setOpen(!open)}> About
          </a>
        </li>
        <li className="navbar-nav">
          <a className="nav-link js-scroll" href="#work" onClick={() => setOpen(!open)}> Projects
          </a>
        </li>
        <li className="navbar-nav">
          <a className="nav-link js-scroll" href="#contact"> Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;