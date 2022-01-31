import React from 'react';
import styles from '../styles/BookCab.module.css';
import ContactDetails from './ContactDetails';

const BookCab = () => {
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
                        <tr>
                          <td>Itinerary :</td>
                          <td>Paris to Toulouse</td>
                        </tr>
                        <tr>
                          <td>pickup date:</td>
                          <td>10/01/2019, 11.35pm</td>
                        </tr>
                        <tr>
                          <td>return date:</td>
                          <td>14/01/2019</td>
                        </tr>
                        <tr>
                          <td>car type</td>
                          <td>Fiat Chrysler</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.grandTotal}>
                      <h5>
                        <span>total fare:</span>
                        <span>$1250</span>
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
                            checked
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
