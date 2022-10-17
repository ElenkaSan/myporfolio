import styles from '../styles/Sidebar.module.css';
import {FaMoon} from "react-icons/fa";
import {ImSun} from "react-icons/im";

const Sidebar = ({ open, setOpen, touch, setTouch, themeToggler }) => {
  const menuSwitch = (
    <FaMoon className="text-info display-6" onClick={() => setTouch(!touch)} />
  );

  const lightSwitch = (
    <ImSun className="text-warning display-6" onClick={() => setTouch(!touch)} />
  );


    return (
    <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`} 
    style={{ background: "linear-gradient(160deg, #885f7fe7 10%, #084e63 70%)" }}
    // style={{ background: "linear-gradient(160deg,  #34174c 10%, #084e63 50%)" }}
    // style={{ backgroundImage: "url(" + sakura + ")" }} 
    >
      <ul className="navbar-nav">
        <li htmlFor="theme-switcher">
          <button className="btn" onClick={() => themeToggler()}
                      type="checkbox"
                      id="theme-switcher"
                      name="theme-switcher"> {touch ? menuSwitch : lightSwitch}
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
