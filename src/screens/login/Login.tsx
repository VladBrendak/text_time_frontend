import React from "react";
import styles from "./Login.module.css";
import PopUp from "../../components/ui/popup/PopUp";
import { User } from "../../interfaces/User";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [userData, setUserData] = useState<User>();

  const clearUserData = {
    name: "",
    email: "",
    password: "",
  };

  const createUser = (e: any) => {
    e.preventDefault();
    console.log();
  };

  const PrintEmailINColsole = (e: any) => {
    e.preventDefault();
    console.log(email);
  };

  const openPopup: () => void = () => {
    setIsOpen(true);
  };

  const closePopup: () => void = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <div className={styles.loginContainer}>
          <h1>Login</h1>
          <form>
            <label htmlFor="Username"> Username </label>
            <input
              type="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="Email"> Email </label>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="Email"> Email </label>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="Email"> Email </label>
            <input
              type="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </form>
          <button onClick={openPopup}>Open Popup</button>
          <button onClick={PrintEmailINColsole}>
            {" "}
            Print Email in console{" "}
          </button>
          {email !== "" && <p> Your email is: {email}</p>}
        </div>
      </div>
      <div
        className={`${
          isOpen ? styles.popupEnterActive : styles.popupExitActive
        }`}
      >
        <PopUp open={isOpen} onClose={closePopup} />
      </div>
    </>
  );
};

export default Login;
