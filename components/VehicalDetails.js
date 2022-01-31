import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/router";
import styles from '../styles/VehicalDetails.module.css';

const VehicalDetails = ({Name,type,seats,ac,price,luggage,start,Fare,TotalFare,image}) => {
  const router = useRouter();
  const bookCab = (e) => {
    e.preventDefault();
    router.push(
      `/book-cab`
    );
  };
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.logoSec}>
              <img src={image} alt={Name} />
              <span className={styles.title}>{Name}</span>
              <span className={styles.type}>{type}</span>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.carDetails}>
              <ul>
                <li>
                  <img src="./seat.png" />
                  <span>{seats} seater</span>
                </li>
                <li>
                  <img src="./luggage.png" />
                  {luggage} luggages
                </li>
              </ul>
              <ul>
                <li>
                  <img src="./snowflake.png" />
                  {ac}
                </li>
                <li>
                  <img src="./settings.png" />
                  {start}
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.price}>
              <div>
                <h4>{TotalFare}</h4>
                <h6>
                  fare/km : <span>{Fare}</span>
                </h6>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.bookCab}>
              <Link href="">
                <span onClick={bookCab}>book now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default VehicalDetails
