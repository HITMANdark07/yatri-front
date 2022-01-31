import Link from 'next/link';
import React from 'react';
import styles from '../styles/Service.module.css';

const Service = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>our service</h2>
          <span className={styles.underline}></span>
        </div>
        <div className={styles.serviceSection}>
          <div className={styles.serviceBox}>
            <div className={styles.serviceIcon}>
              <img className={styles.imageIcon} src="./bxs-plane.svg" />
            </div>
            <h3>airport pick-drop</h3>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Lorem Ipsum the has been standard dummy text ever 1500s..
            </p>
            <div className={styles.lowerSection}>
              <div className={styles.rating}>
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
              </div>
              <h6>15% discount</h6>
            </div>
            <Link href="#">
              <span className={styles.btn}>learn more</span>
            </Link>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.serviceIcon}>
              <img className={styles.imageIcon} src="./bxs-bus.svg" />
            </div>
            <h3>Local</h3>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Lorem Ipsum the has been standard dummy text ever 1500s..
            </p>
            <div className={styles.lowerSection}>
              <div className={styles.rating}>
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
              </div>
              <h6>15% discount</h6>
            </div>
            <Link href="#">
              <span className={styles.btn}>learn more</span>
            </Link>
          </div>
          <div className={styles.serviceBox}>
            <div className={styles.serviceIcon}>
              <img className={styles.imageIcon} src="./bxs-car.svg" />
            </div>
            <h3>outstation</h3>
            <p>
              Lorem Ipsum is simply dummy text of the typesetting industry.
              Lorem Ipsum the has been standard dummy text ever 1500s..
            </p>
            <div className={styles.lowerSection}>
              <div className={styles.rating}>
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
                <img src="./bxs-star (1).svg" />
              </div>
              <h6>15% discount</h6>
            </div>
            <Link href="#">
              <span className={styles.btn}>learn more</span>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Service
