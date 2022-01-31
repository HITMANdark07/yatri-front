import React from 'react';
import styles from "../styles/BookCab.module.css";

const ContactDetails = () => {
    return (
        <div className={styles.reviewBox}>
            <div className={styles.titleTop}>
                <h5>contact details</h5>
            </div>
            <div className={styles.guestDetail}>
                <form>
                    <div className={styles.formGroup}>
                        <div className={styles.NameRow}>
                            <div className={styles.firstName}>
                                <label>first name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className={styles.formControl}
                                    placeholder="First name"
                                />
                            </div>
                            <div className={styles.lastName}>
                                <label>last name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className={styles.formControl}
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Email address</label>
                        <input
                            type="email"
                            className={styles.formControl}
                            placeholder="Enter email"
                        />
                        <small id="emailHelp" className={styles.formText}>
                            Booking confirmation will be sent to this email ID.
                        </small>
                    </div>

                    <div className={styles.formGroup}>
                        <label>contact info</label>
                        <input
                            id="mobile-no"
                            type="tel"
                            className={styles.formControl}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="exampleFormControlTextarea1">
                            special request
                        </label>
                        <textarea
                            className={styles.formControl}
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder=""
                        ></textarea>
                    </div>

                    <div>
                        <label htmlFor="exampleFormControlTextarea1">
                            have a coupon code?
                        </label>
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

                    <div className={styles.submitBtn}>
                        <button
                            type="button"
                            className={styles.btn}
                        >
                            proceed to pay
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactDetails;
