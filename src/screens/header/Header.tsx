import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUp from "../../components/ui/popup/PopUp";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openPopup: () => void = () => {
    setIsOpen(true);
  };

  const closePopup: () => void = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className={styles.header}>
        <div> FAKE TWITTER </div>
        <div className={styles.elements}>
          <div className={styles.menu}>
            <div>
              <span>
                <Link to={"/"}> Home </Link>
              </span>
            </div>
            <div>
              <span>
                <Link to={"/"}> Home </Link>
              </span>
            </div>
            <div>
              <span>
                <Link to={"/"}> Home </Link>
              </span>
            </div>
            <div>
              <span>
                <Link to={"/login"}> Login </Link>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.other} onClick={openPopup}>
          <span>Login</span>
        </div>
        <div
          className={`${
            isOpen ? styles.popupEnterActive : styles.popupExitActive
          }`}
        >
          <PopUp open={isOpen} onClose={closePopup} />
        </div>
      </div>
    </div>
  );
};

export default Header;
