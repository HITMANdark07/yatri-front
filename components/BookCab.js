import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '../styles/BookCab.module.css';
import ContactDetails from './ContactDetails';
import Skeleton from '@mui/material/Skeleton';
import moment from 'moment';

const BookCab = () => {

  const router = useRouter();
  const destination = router.query.destination;
  const tariffId = router.query.tariff;
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState("");
  const [gst,setGst] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [car, setCar] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);
  React.useEffect(() => {
    if(tariffId && destination){
      setLoading(true);
      axios({
        method:'POST',
        url:`${process.env.API}/calculate/charges`,
        data:{
          tariffId,
          destination
        }
      }).then((response) => {
        setLoading(false);
        setGst(response.data.gst);
        setCar(response.data.car);
        setEstimatedCost(response.data.estimated_cost);
        if(response.data.distance) setDistance(response.data.distance);
        if(response.data.from) setFrom(response.data.from);
        if(response.data.to) setTo(response.data.to);
      }).catch((err) => {
        console.log(err);
        setLoading(false);
      })
    }
  },[tariffId, destination]);
    return (
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contactDetails}>
            <div className={styles.reviewSection}>
              <ContactDetails />

              {/*cab information start */}
              <div className={styles.reviewBox}>
                <div className={styles.titleTop}>
                  <h5>Information</h5>
                </div>
                <div className={styles.flightDetail}>
                  <div className={styles.rowDetails}>
                    <div className={styles.colDetails}>
                      <div className={styles.boxes}>
                        <h6>Cancellation Charges</h6>
                        <ul>
                          <li>
                            cab fee : <span>$2012</span>
                          </li>
                          <li>
                            This cab allows cancellation only before 2 hrs from
                            departure time.
                          </li>
                        </ul>
                      </div>
                      <div className={styles.boxes}>
                        <h6>Reschedule Charges</h6>
                        <ul>
                          <li>
                            cab fee : <span>$2012</span>
                          </li>
                          <li>
                            This cab allows reschedule only before 2 hrs from
                            departure time.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*cab information end*/}
            </div>
          </div>
          <div className={styles.bookingOrder}>
            <div className={styles.reviewSection}>
              {/*Booking summary start */}
              <div className={styles.reviewBox}>
                <div className={styles.titleTop}>
                  <h5>booking summary</h5>
                </div>
                <div className={styles.flightDetail}>
                  <div className={styles.summeryBox}>
                    <table className={styles.table}>
                      <tbody>
                        {
                          router.query.trip_type==="OUTSTATION" &&
                          <>
                          <tr>
                          <td>From: {from}</td>
                          <td style={{fontSize:25}}>
                          ➠
                          </td>
                          <td>To: {to}</td>
                          </tr>
                          {
                            loading && 
                            <tr>
                            <td><Skeleton animation="wave" width={150} /></td>
                            
                            <td><Skeleton animation="wave" width={150} /></td>
                            </tr>
                          }
                          <tr>
                          <td>Approx Distance :</td>
                          {loading ?
                          <Skeleton animation="wave" width={150} />
                          :
                          <td>{distance}</td>
                          }
                          </tr>
                          </>
                        }
                        <tr>
                          <td>pickup date:</td>
                          <td>{moment(new Date(router.query.date)).format("DD/MM/YYYY")}, {router.query.time} { router.query.time &&  router.query.time.split(":")[0]>=12 ? "PM" :"AM"}</td>
                        </tr>
                        <tr>
                          <td>return date:</td>
                          <td>{moment(new Date(router.query.date)).format("DD/MM/YYYY")}</td>
                        </tr>
                        <tr>
                          <td>car type</td>
                          {
                            loading ?
                            <Skeleton animation="wave" width={150} />
                            :
                            <td>{car}</td>
                          }
                        </tr>
                        <tr>
                          <td>GST ( {(+gst*100/(+estimatedCost)).toFixed(1)}% ) :</td>
                          <td>{gst && '₹'+gst+'/-'}</td>
                        </tr>
                        <tr>
                          <td>Estimated fare :</td>
                          {
                            loading ?
                            <Skeleton animation="wave" width={150} />
                            :
                            <td>{'₹'+estimatedCost+'/-'}</td>
                          }
                          
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.grandTotal}>
                      <h5>
                        <span>total estimated fare:</span>
                        {
                            loading ?
                            <Skeleton animation="wave" height={30} width={150} />
                            :
                            <span>₹{Number(estimatedCost)+Number(gst)}/-</span>
                          }
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*Booking summary end */}

              {/*Apply promoSection start */}
              <div className={styles.reviewBox}>
                <div className={styles.flightDetail}>
                  <div className={styles.promoSection}>
                    <div className={styles.formGroup}>
                      <label>have a coupon code?</label>
                      <div className={styles.inputGroup}>
                        <input
                          type="text"
                          className={styles.promoControl}
                          placeholder="Promo Code"
                        />
                        <div className={styles.inputGroupPrepend}>
                          <span className={styles.inputGroupText}>apply</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.promos}>
                      <form>
                        <div className={styles.formCheck}>
                          <input
                            className={styles.formCheckInput}
                            type="radio"
                            name="radiobtn"
                            id="exampleRadios3"
                            value="option1"
                          />
                          <div>
                            <label
                              className={styles.formCheckLabelTitle}
                              htmlFor="exampleRadios3"
                            >
                              RICA500
                            </label>
                            <label
                              className={styles.formCheckLabelPara}
                              htmlFor="exampleRadios3"
                            >
                              Use RICA50, and get $50 off on first booking
                            </label>
                          </div>
                        </div>
                        <div className={styles.formCheck}>
                          <input
                            className={styles.formCheckInput}
                            type="radio"
                            name="radiobtn"
                            id="exampleRadios4"
                            value="option2"
                          />
                          <div>
                            <label
                              className={styles.formCheckLabelTitle}
                              htmlFor="exampleRadios4"
                            >
                              CAB10
                            </label>
                            <label
                              className={styles.formCheckLabelPara}
                              htmlFor="exampleRadios4"
                            >
                              Use FLY10, and get 10% off upto $50 on cab ticket
                              bookings.
                            </label>
                          </div>
                        </div>
                        <div className={styles.formCheck}>
                          <input
                            className={styles.formCheckInput}
                            type="radio"
                            name="radiobtn"
                            id="exampleRadios5"
                            value="option2"
                          />
                          <div>
                            <label
                              className={styles.formCheckLabelTitle}
                              htmlFor="exampleRadios5"
                            >
                              CAB80
                            </label>
                            <label
                              className={styles.formCheckLabelPara}
                              htmlFor="exampleRadios5"
                            >
                              Upto 80% Off + Upto 40% Cashback on Cab booking
                              more + Extra 10% off via ICICI Cards (10th-13th
                              Oct)
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*Apply promoSection end */}

              {/* <div className={styles.reviewBox}>
                <img src="./1.jpg" className={styles.advertiseImage} blur-up />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default BookCab
