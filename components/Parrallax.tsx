import React from "react";
import { Parallax, Background } from "react-parallax";
import styles from "../styles/Parrallax.module.css";

const Parralax = ({ children, bg }: any) => (
  <div className={styles.styles}>
    <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: bg,
            backgroundSize: "cover",
          }}
        />
      </Background>
      <div>{children}</div>
    </Parallax>
    <div className={styles.html} />
  </div>
);

export default Parralax;
