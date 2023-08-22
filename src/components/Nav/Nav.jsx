import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({ onSearch, access, setAccess }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className={styles.div}>
      <NavLink className={styles.btn} to="/home">
        Home
      </NavLink>

      <NavLink className={styles.btn} to="/about">
        About
      </NavLink>

      <NavLink className={styles.btn} to="/favorites">
        Favorites
      </NavLink>

      <button className={styles.btn2} onClick={handleLogOut}>
        Log Out
      </button>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
