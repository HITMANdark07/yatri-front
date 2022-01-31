import { style } from '@mui/system';
import Link from 'next/link';
import React from 'react'
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>emergency call</h2>
          <span className={styles.underline}></span>
        </div>
        <div className={styles.row}>
          {/* <div className={styles.col1}>
            <div className={styles.imageSection}>
              <div className={styles.imgBox}>
                <img src="./1.jpg" className={styles.image1} />
                <div className={styles.noClass}>
                  <h3>01</h3>
                </div>
              </div>
              <div className={styles.imgBox}>
                <img src="./2.jpg" className={styles.image2} />
                <div className={styles.noClass}>
                  <h3>02</h3>
                </div>
              </div>
            </div>
          </div> */}
          <div className={style.col2}>
            <div className={styles.aboutText}>
              <div>
                <h5>
                  <span>new</span> offer...
                </h5>
                <h3>call us to Book a taxi</h3>
                <h2>(912) 333-6000</h2>
                <p>
                  The operator will call back immediately and report the cost of
                  travel..{" "}
                </p>
                <Link href="">
                  <span className={styles.btn}>discover</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact
