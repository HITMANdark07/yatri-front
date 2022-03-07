import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from "next/router";
import styles from '../styles/VehicalDetails.module.css';

const VehicalDetails = ({id,per,Cat,Name,type,seats,ac,price,luggage,start,Fare,TotalFare,gst,image}) => {
  const [details, setDetails] = useState(false);
  const [description,setDescription] = useState("INCLUSION")
  const router = useRouter();
  const bookCab = (e) => {
    e.preventDefault();
    router.push(
      `/book-cab/${router.asPath.replace(router.pathname,"")}&tariff=${id}&car_type=${Cat}`
    );
  };
  
  const openDialog = () =>{
     setDetails(!details);
  }

  const showDescription = () =>{
    if (description == "INCLUSION") {
      return (
        <ul>
          <li>
            <img src="./inclusions_icon1.png" />
            <h6>Base Fare</h6>
          </li>
          <li>
            <img src="./inclusions_icon2.png" />
            <h6>Driver Allowance</h6>
          </li>
          <li>
            <img src="./inclusions_icon3.png" />
            <h6>GST ({gst}%)</h6>
          </li>
        </ul>
      );
    } else if (description == "EXCLUSION") {
      return (
        <ul>
          <li>
            <img src="./exclusions_icon1.png" />
            <h6>Pay ₹{Fare}/km after 80 km</h6>
          </li>
          <li>
            <img src="./inclusions_icon1.png" />
            <h6>Pay ₹120/hr after 8 hours</h6>
          </li>
          <li>
            <img src="./exclusions_icon2.png" />
            <h6>Toll / State ta</h6>
          </li>
          <li>
            <img src="./exclusions_icon3.png" />
            <h6>Parking</h6>
          </li>
        </ul>
      );
    } else if (description == "FACILITIES") {
      return (
        <ul>
          <li>
            <img src="./facilities_icon1.png" />
            <h6>{seats} seater</h6>
          </li>
          <li>
            <img src="./facilities_icon2.png" />
            <h6>{luggage} bags</h6>
          </li>
          <li>
            <img src="./facilities_icon3.png" />
            <h6>{ac ? "AC" : "NON_AC"}</h6>
          </li>
        </ul>
      );
    } else {
      return (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <li
            style={{
              fontSize: "15px",
              marginBottom: "10px",
              listStyle: "solid",
            }}
          >
            Your Trip has a KM limit as well as an Hours limit. If your usage
            exceeds these limits, you will be charged for the excess KM and/or
            hours used.
          </li>
          <li
            style={{
              fontSize: "15px",
              marginBottom: "10px",
              listStyle: "solid",
            }}
          >
            The KM and Hour(s) usage will be calculated based on the distance
            from your pick-up point and back to the pick-up point
          </li>
          <li
            style={{
              fontSize: "15px",
              marginBottom: "10px",
              listStyle: "solid",
            }}
          >
            All road toll fees, parking charges, state taxes etc. are charged
            extra and need to be paid to the concerned authorities as per
            actuals.
          </li>
          <li
            style={{
              fontSize: "15px",
              marginBottom: "10px",
              listStyle: "solid",
            }}
          >
            For driving between 10:00 pm to 6:00 am on any of the nights, an
            additional allowance will be applicable and is to be paid to the
            driver.
          </li>
        </ul>
      );
    }
  }

  console.log(description);

    return (
      <div className={styles.vehicalDetails}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.logoSec}>
                <img src={image} alt={Name} />
                <span className={styles.title}>{Name}</span>
                <span className={styles.type}>{type}</span>
              </div>
            </div>
            <div className={styles.colDetails}>
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
              <div className={styles.details} onClick={openDialog}>
                <span style={{ fontSize: "20px", color: "#e9b30e" }}>
                  Details
                </span>
                <svg
                  // style={{
                  //   transform:
                  //     activeIndex === true ? "rotate(180deg)" : "rotate(0deg)",
                  // }}
                  viewBox="0 0 320 512"
                  width="100"
                  title="angle-down"
                  style={{ width: "20px", height: "20px" }}
                >
                  <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                </svg>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.price}>
                {
                  (router.query.trip_type=== "LOCAL" || router.query.trip_type==="AIRPORT") ?
                  (<div>
                  <h4>Base Fare: ₹{TotalFare}/-</h4>
                  <h6>
                    fare/km: <span>₹{Fare}/-</span>
                  </h6>
                </div>)
                :
                (<div>
                  <h4>fare/km: ₹{per}/-</h4>
                  {/* <h6>
                    : <span>₹{Fare}/-</span>
                  </h6> */}
                </div>)
                }
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
        <div
          className={styles.description}
          style={{
            display: details === true ? "block" : "none",
          }}
        >
          <div className={styles.descriptionHeading}>
            <span
              onClick={() => setDescription("INCLUSION")}
              style={{
                backgroundColor: description === "INCLUSION" ? "#e9b30e" : "",
                color: description === "INCLUSION" ? "#fff" : "",
              }}
              value="INCLUSION"
            >
              Inclusion
            </span>
            <span
              onClick={() => setDescription("EXCLUSION")}
              style={{
                backgroundColor: description === "EXCLUSION" ? "#e9b30e" : "",
                color: description === "EXCLUSION" ? "#fff" : "",
              }}
              value="EXCLUSION"
            >
              Exclusion
            </span>
            <span
              onClick={() => setDescription("FACILITIES")}
              style={{
                backgroundColor: description === "FACILITIES" ? "#e9b30e" : "",
                color: description === "FACILITIES" ? "#fff" : "",
              }}
              value="FACILITIES"
            >
              Facilities
            </span>
            <span
              onClick={() => setDescription("TANDC")}
              style={{
                backgroundColor: description === "TANDC" ? "#e9b30e" : "",
                color: description === "TANDC" ? "#fff" : "",
              }}
              value="TANDC"
            >
              T/C
            </span>
          </div>
          <div className={styles.descriptionContent}>{showDescription()}</div>
        </div>
      </div>
    );
}

export default VehicalDetails
