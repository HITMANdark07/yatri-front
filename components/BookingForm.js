import React, { useState } from "react";
import {useRouter} from "next/router";
import styles from "../styles/Banner.module.css";

const BookingForm = ({val}) => {
  const router = useRouter();
    const [values, setValues] = useState({
      start: "Banglore",
      destination: "Kolkata",
      date: "2020-12-15",
      time: "10:15",
      tripType: val
    });
    
    const { start, destination, date,time, tripType } = values;
    const handleStartChange = (e) => {
      e.persist();
      setValues((values) => ({
        ...values,
        start: e.target.value,
      }));
    };

    const handleTripChange = (e) => {
      e.persist();
      setValues((values) => ({
        ...values,
        tripType: e.target.value,
      }));
    };

    const handleDestinationChange = (e) => {
      e.persist();
      setValues((values) => ({
        ...values,
        destination: e.target.value,
      }));
    };

    const handleDateChange = (e) => {
      e.persist();
      setValues((values) => ({
        ...values,
        date: e.target.value,
      }));
    };

    const handleTimeChange = (e) => {
      e.persist();
      setValues((values) => ({
        ...values,
        time: e.target.value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/car-search/?start=${start}&destination=${destination}&date=${date}&time=${time}&tripType=${val}`);
    };

    if(val=="Outstation"){
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <ul className={styles.bookingWidgetForm}>
                <li>
                  <label className={styles.label} htmlFor="start">
                    From
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="start"
                      value={values.start}
                      onChange={handleStartChange}
                    >
                      <option value="volvo">Banglore</option>
                      <option value="saab">Kolkata</option>
                      <option value="mercedes">New delhi</option>
                      <option value="audi">Lucknow</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="destination">
                    To
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="start"
                      value={values.destination}
                      onChange={handleDestinationChange}
                    >
                      <option value="volvo">Banglore</option>
                      <option value="saab">Kolkata</option>
                      <option value="mercedes">New delhi</option>
                      <option value="audi">Lucknow</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="date">
                    Pick Up
                  </label>
                  <div className={styles.formField}>
                    <input
                      id="date"
                      type="date"
                      value={values.date}
                      onChange={handleDateChange}
                    />
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="time">
                    Pick Up At
                  </label>
                  <div className={styles.formField}>
                    <input
                      type="time"
                      id="time"
                      value={values.time}
                      onChange={handleTimeChange}
                    />
                  </div>
                </li>
                <li>
                  <input
                    type="submit"
                    className={styles.formSubmit}
                    value="select cars"
                  />
                </li>
              </ul>
            </form>
          </div>
        );
    }

    else if(val=="Local"){

        return (
          <div>
            <form onSubmit={handleSubmit}>
              <ul className={styles.bookingWidgetForm}>
                <li>
                  <label className={styles.label} htmlFor="start">
                    City
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="start"
                      value={values.destination}
                      onChange={handleDestinationChange}
                    >
                      <option value="volvo">Banglore</option>
                      <option value="saab">Kolkata</option>
                      <option value="mercedes">New delhi</option>
                      <option value="audi">Lucknow</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="date">
                    Pick Up
                  </label>
                  <div className={styles.formField}>
                    <input
                      id="date"
                      type="date"
                      value={values.date}
                      onChange={handleDateChange}
                    />
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="time">
                    Pick Up At
                  </label>
                  <div className={styles.formField}>
                    <input
                      type="time"
                      id="time"
                      value={values.time}
                      onChange={handleTimeChange}
                    />
                  </div>
                </li>
                <li>
                  <input
                    type="submit"
                    className={styles.formSubmit}
                    value="select cars"
                  />
                </li>
              </ul>
            </form>
          </div>
        );
    }
    else
    {
        return (
          <div>
            <form onSubmit={handleSubmit}>
              <ul className={styles.bookingWidgetForm}>
                <li>
                  <label className={styles.label} htmlFor="start">
                    City
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="start"
                      value={values.destination}
                      onChange={handleDestinationChange}
                    >
                      <option value="volvo">Banglore</option>
                      <option value="saab">Kolkata</option>
                      <option value="mercedes">New delhi</option>
                      <option value="audi">Lucknow</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="tripType">
                    Trip type
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="tripType"
                      value={values.tripType}
                      onChange={handleTripChange}
                    >
                      <option value="volvo">Select trip type</option>
                      <option value="volvo">Cab from Airport</option>
                      <option value="saab">Cab to Airport</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="start">
                    Pick Up Address
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="start"
                      value={values.start}
                      onChange={handleStartChange}
                    >
                      <option value="volvo">Banglore</option>
                      <option value="saab">Kolkata</option>
                      <option value="mercedes">New delhi</option>
                      <option value="audi">Lucknow</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="date">
                    Pick Up
                  </label>
                  <div className={styles.formField}>
                    <input
                      id="date"
                      type="date"
                      value={values.date}
                      onChange={handleDateChange}
                    />
                  </div>
                </li>
                <li>
                  <label className={styles.label} htmlFor="time">
                    Pick Up At
                  </label>
                  <div className={styles.formField}>
                    <input
                      type="time"
                      id="time"
                      value={values.time}
                      onChange={handleTimeChange}
                    />
                  </div>
                </li>
                <li>
                  <input
                    type="submit"
                    className={styles.formSubmit}
                    value="select cars"
                  />
                </li>
              </ul>
            </form>
          </div>
        );
    }
}
export default BookingForm
