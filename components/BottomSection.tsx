import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillGooglePlusCircle,
} from "react-icons/ai";
import { BsFillPhoneFill, BsFillTelephoneFill } from "react-icons/bs";

import styles from "../styles/BottomSection.module.css";

function BottomSection() {
  return (
    <div className={styles.container}>
      <div className={styles.each}>
        <h2 className={styles.headers}>Models</h2>
        <p>Toyota</p>
        <p>Mazda</p>
        <p>Nissan</p>
        <p>Audi</p>
        <p>Mercedez Benz</p>
        <p>Kia</p>
      </div>
      <div className={styles.each}>
        <h2 className={styles.headers}>Quick Links</h2>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Help</p>
        <p>Faqs</p>
        <p>Terms of use</p>
        <p>Privacy Policy</p>
      </div>
      <div className={styles.each}>
        <h2 className={styles.headers}>Get in Touch</h2>
        <div className={styles.eachInner}>
          <HiLocationMarker color="#F45C5D" />
          <p>123 Sebastian, USA.</p>
        </div>
        <div className={styles.eachInner}>
          <BsFillPhoneFill color="#F45C5D" />
          <p>333 222 3333</p>
        </div>
        <div className={styles.eachInner}>
          <BsFillTelephoneFill color="#F45C5D" />
          <p>+222 11 4444</p>
        </div>
        <div className={styles.eachInner}>
          <IoMdMail color="#F45C5D" />
          <p>mail 1@example.com</p>
        </div>
        <div className={styles.eachInner}>
          <IoMdMail color="#F45C5D" />
          <p>mail 2@example.com</p>
        </div>
      </div>
      <div className={styles.each}>
        <h2 className={styles.headers}>News Letter</h2>
        <p className={styles.order}>Free Delivery on your first order!</p>
        <div className={styles.productSearch}>
          <input type="text" placeholder="Product name..." />
          <div>Go</div>
        </div>
        <h2 className={styles.headers}>Follow Us on</h2>
        <div className={styles.icons}>
          <div>
            <AiFillFacebook color="#6788CE" size={40} />
          </div>
          <div>
            <AiFillTwitterCircle color="#01ACEE" size={40} />
          </div>
          <div>
            <AiFillGooglePlusCircle color="#DD4B39" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSection;
