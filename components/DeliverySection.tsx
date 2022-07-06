import React from "react";

import styles from "../styles/DeliverySection.module.css";
import { FaShippingFast, FaThumbsUp } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

function DeliverySection() {
  return (
    <div className={styles.container}>
      <h2>Electronics:</h2>
      <p className={styles.textContent}>
        If you are considering a new car, we make it easy to find exactly what
        you need at a price you can afford. We offer Every Day Low Prices on on
        different brand of cars ranging from Toyota, Mercedes Benz, Audi, BMW,
        Honda, Hyundai, Jaguar, Kia, Land Rover, Nissan and many more.
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
