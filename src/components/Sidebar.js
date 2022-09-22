import sakura from "../img/sakura.jpeg";
import Switch from '@mui/joy/Switch';
import LightMode from '@mui/icons-material/LightMode';
import styles from '../Style/Sidebar.module.css';

const Sidebar = ({ open, setOpen, themeToggler }) => {
   
    return (
    <div className={`${styles.sidebar} ${open && styles.sidebarOpen}`} style={{ backgroundImage: "url(" + sakura + ")" }} >
      <ul className="navbar-nav ">
        <li className={styles.themeSwitcher}>
          <Switch onClick={() => themeToggler()} open={open} setOpen={setOpen}
            componentsProps={{
            thumb: {
            children: <LightMode  className="text-dark"  onClick={() => setOpen(!open)}/>
            },
            }}
            sx={{
            '--Switch-thumb-size': '28px',
            }}
        />
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