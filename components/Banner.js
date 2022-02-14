import React, { useState, useRef} from "react";
import styles from "../styles/Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingForm from "./BookingForm";

const Banner = () => {
  const [rideType, setRideType] = useState("OUTSTATION");

  return (
    <div className={styles.container}>
      <div className={styles.bookingWidgetContainer}>
        <div className={styles.rideTypeContainer}>
          <span
            className={[
              styles.rideType,
              rideType === "OUTSTATION" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("OUTSTATION")}
          >
            OUTSTATION
          </span>
          <span
            className={[
              styles.rideType,
              rideType === "LOCAL" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("LOCAL")}
          >
            LOCAL
          </span>
          <span
            className={[
              styles.rideType,
              rideType === "AIRPORT" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("AIRPORT")}
          >
            AIRPORT
          </span>
        </div>
        <div>
          <BookingForm val={rideType} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
