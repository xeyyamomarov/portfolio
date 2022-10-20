import "./topbar.scss";
import { Mail, Person } from "@material-ui/icons";
export const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            X.O
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+994 55 541 4750</span>
          </div>
          <div className="itemContainer">
            <Mail  className="icon" />
            <span>khayyam.omarov@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
