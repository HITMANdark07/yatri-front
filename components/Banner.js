import React, { useState, useRef} from "react";
import styles from "../styles/Banner.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookingForm from "./BookingForm";

const Banner = () => {
  const [rideType, setRideType] = useState("Outstation");

  return (
    <div className={styles.container}>
      <div className={styles.bookingWidgetContainer}>
        <div className={styles.rideTypeContainer}>
          <span
            className={[
              styles.rideType,
              rideType === "Outstation" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("Outstation")}
          >
            Outstation
          </span>
          <span
            className={[
              styles.rideType,
              rideType === "Local" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("Local")}
          >
            Local
          </span>
          <span
            className={[
              styles.rideType,
              rideType === "Airport" ? styles.active : {},
            ].join(" ")}
            onClick={() => setRideType("Airport")}
          >
            Airport
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
