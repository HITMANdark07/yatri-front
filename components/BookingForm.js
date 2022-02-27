import React, { useState } from "react";
import {useRouter} from "next/router";
import styles from "../styles/Banner.module.css";
import axios from "axios";
import moment from 'moment';

const BookingForm = ({val}) => {
  const router = useRouter();
    const [values, setValues] = useState({
      start: "Banglore",
      destination: "Kolkata",
      date: moment().format('YYYY-MM-DD'),
      time: moment().format('HH:mm'),
      trip_type: val,
    });
    console.log();
    const [locations, setLocations] = useState([]);
    const [subTrip, setSubTrip] = useState("");

    const getLocs = () => {
      axios({
        method:'GET',
        url:`${process.env.API}/location/list?status=true`
      }).then((res) => {
        setLocations(res.data);
        setValues((state) => ({
          ...state,
          start:res.data[0]._id,
          destination:res.data[1]._id
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

    React.useEffect(() => {
      switch (val){
        case 'LOCAL':
          setSubTrip("8HRS/80KM");
          break;
        case 'OUTSTATION':
          setSubTrip("ONEWAY");
          break;
        case 'AIRPORT':
          setSubTrip("CAB_FROM_AIRPORT");
          break;
        default:
          setSubTrip("8HRS/80KM");
      }
    },[val]);
    // console.log(subTrip,val);
    const handleSubTripChange = (e) => {
      e.persist();
      setSubTrip(e.target.value);
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


    React.useEffect(() => {
      getLocs();
    },[]);

    if(val=="OUTSTATION"){
        return (
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/car-search/?start=${start}&destination=${destination}&date=${date}&time=${time}&trip_type=${val}&sub_trip=${subTrip}`);
            }}>
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
                  <label className={styles.label} htmlFor="tripType">
                    Trip type
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="tripType"
                      value={subTrip}
                      onChange={handleSubTripChange}
                    >
                      <option value="ONEWAY">ONEWAY</option>
                      <option value="ROUND_TRIP">ROUND TRIP</option>
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
              router.push(`/car-search/?start=${start}&destination=${start}&date=${date}&time=${time}&trip_type=${val}`);
            }}>
              <ul className={styles.bookingWidgetForm}>
                <li>
                  <label className={styles.label} htmlFor="start">
                    City
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
    else
    {
        return (
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/car-search/?start=${start}&destination=${destination}&date=${date}&time=${time}&trip_type=${val}&sub_trip=${subTrip}`);
            }}>
              <ul className={styles.bookingWidgetForm}>
                <li>
                  <label className={styles.label} htmlFor="start">
                    City
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
                  <label className={styles.label} htmlFor="tripType">
                    Trip type
                  </label>
                  <div className={styles.formField}>
                    <select
                      id="tripType"
                      value={subTrip}
                      onChange={handleSubTripChange}
                    >
                      <option value="CAB_FROM_AIRPORT">CAB FROM AIRPORT</option>
                      <option value="CAB_TO_AIRPORT">CAB TO AIRPORT</option>
                    </select>
                  </div>
                </li>
                {/* <li>
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
                </li> */}
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
