import React from "react";

import styles from "../styles/Home.module.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      &copy; {year} Autochek All rights reserved
    </div>
  );
}

export default Footer;
