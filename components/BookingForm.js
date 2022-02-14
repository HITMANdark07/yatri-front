import React, { useState } from "react";
import {useRouter} from "next/router";
import styles from "../styles/Banner.module.css";
import axios from "axios";

const BookingForm = ({val}) => {
  const router = useRouter();
    const [values, setValues] = useState({
      start: "Banglore",
      destination: "Kolkata",
      date: "2020-12-15",
      time: "10:15",
      trip_type: val
    });
    const [locations, setLocations] = useState([]);

    const getLocs = () => {
      axios({
        method:'GET',
        url:`${process.env.API}/location/list`
      }).then((res) => {
        setLocations(res.data);
        setValues((state) => ({
          ...state,
          start:res.data[0]._id,
          destination:res.data[0]._id
        }))
      }).catch((err) => {
        console.log(err);
      })
    }
    
    const { start, destination, date,time, trip_type } = values;
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
      router.push(`/car-search/?start=${start}&destination=${destination}&date=${date}&time=${time}&trip_type=${val}`);
    };

    React.useEffect(() => {
      getLocs();
    },[]);

    if(val=="OUTSTATION"){
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
                      {
                        locations.map((loc) => (
                          <>
                          <option key={loc._id} value={loc._id}>{loc.name}</option>
                          </>
                        ))
                      }
                      {/* <option value="volvo">Banglore</option>
                      <option value="saab">Kolkata</option>
                      <option value="mercedes">New delhi</option>
                      <option value="audi">Lucknow</option> */}
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
                      {
                        locations.map((loc) => (
                          <>
                          <option key={loc._id} value={loc._id}>{loc.name}</option>
                          </>
                        ))
                      }
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

    else if(val=="LOCAL"){

        return (
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/car-search/?start=${start}&destination=&date=${date}&time=${time}&trip_type=${val}`);
            }}>
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
                      {
                        locations.map((loc) => (
                          <>
                          <option key={loc._id} value={loc._id}>{loc.name}</option>
                          </>
                        ))
                      }
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
                      {
                        locations.map((loc) => (
                          <>
                          <option key={loc._id} value={loc._id}>{loc.name}</option>
                          </>
                        ))
                      }
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
                      <option value="CAB_FROM_AIRPORT">CAB FROM AIRPORT</option>
                      <option value="CAB_TO_AIRPORT">CAB TO AIRPORT</option>
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
                      {
                        locations.map((loc) => (
                          <>
                          <option key={loc._id} value={loc._id}>{loc.name}</option>
                          </>
                        ))
                      }
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
