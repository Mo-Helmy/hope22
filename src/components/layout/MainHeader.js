import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTurnDown,
  faCartArrowDown,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import logo from "../assets/logo-inverted.png";

import classes from "./MainHeader.module.css";
import CategoryList from "./CategoryList";

const MainHeader = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prevState) => !prevState);
  };
  const navClassName = `${classes.nav} ${showMenu ? classes.active : ""}`;
  return (
    <header className={classes.header}>
      <div className={classes["icon-menu"]} onClick={showMenuHandler}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>

      <nav className={navClassName}>
        <ul>
          <li>
            Catalog
            <FontAwesomeIcon icon={faArrowTurnDown} />
            <CategoryList />
          </li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
      </nav>

      <div className={classes.user}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className={classes.search}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className={classes.cart}>
        <FontAwesomeIcon icon={faCartArrowDown} />
        <span>4</span>
      </div>
    </header>
  );
};

export default MainHeader;
