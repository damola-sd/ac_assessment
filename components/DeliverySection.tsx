import React from "react";

import styles from "../styles/DeliverySection.module.css";
import { FaShippingFast, FaThumbsUp } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function DeliverySection() {
  return (
    <div className={styles.container}>
      <h2>Vehicles:</h2>
      <p className={styles.textContent}>
        Search our inventory of over 5000 pre-inspected vehicles and select your
        preferred brand, model and year. Read through the inspection report
        which shows pictures, electrical and mechanical state of the car.
      </p>
      <div className={styles.bottomSection}>
        <div>
          <IoMdCart size={60} color="#0879C9" />
          <div>
            <h1>Free Shipping</h1>
            <p>on orders over $100</p>
          </div>
        </div>
        <div>
          <FaShippingFast size={60} color="#0879C9" />
          <div>
            <h1>Fast Delivery</h1>
            <p>World Wide</p>
          </div>
        </div>
        <div>
          <FaThumbsUp size={60} color="#0879C9" />
          <div>
            <h1>Big Choice</h1>
            <p>of Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverySection;
