import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaTruckMoving } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";
import { FaCartArrowDown } from "react-icons/fa";

import styles from "../styles/Nav.module.css";
import logo from "../public/autochek.png";

function Nav() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textIconContainerLeft}>
          <div>Offer Zone Deal and Discount</div>
          <FaShoppingCart />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.textIconContainer}>
            <MdLocationOn size={16} />
            <div>Select Location</div>
          </div>{" "}
          |
          <div className={styles.textIconContainer}>
            <FaTruckMoving size={16} />
            <div>Track Order</div>
          </div>{" "}
          |
          <div className={styles.textIconContainer}>
            <IoMdCall size={16} />
            <div>001 234 5678</div>
          </div>{" "}
          |
          <div className={styles.textIconContainer}>
            <HiOutlineLogin size={16} />
            <div>Login</div>
          </div>{" "}
          |
          <div className={styles.textIconContainer}>
            <HiOutlineLogin size={16} />
            <div>Register</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <Link href="/" passHref>
          <Image
            className="mx-4"
            src={logo}
            alt="Logo"
            width="150"
            height="60"
          />
        </Link>
        <div className={styles.inputContainer}>
          <div className={styles.inputContainerInner}>
            <input type="text" placeholder="Search" />
            <button type="submit">Search</button>
          </div>
          <div className={styles.cart}>
            <FaCartArrowDown size={22} color="#fff" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
