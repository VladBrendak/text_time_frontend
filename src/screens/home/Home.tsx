import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.colors}>
      <div className={styles.color1}></div>
      <div className={styles.color2}></div>
      <div className={styles.color3}></div>
      <div className={styles.color4}></div>
      <div className={styles.color5}></div>
    </div>
  );
}

export default Home;
