import React from 'react';
import { useState } from 'react';
import styles from "../styles/BookCab.module.css";
import Autocomplete from "react-google-autocomplete";
import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import makeToast from '../Toaster';
import SignUpModal from './SignUpModal';
import { useRouter } from 'next/router';
import { toggleShow } from '../redux/user/user.action';

const ContactDetails = ({currentUser, toggle}) => {
    const router = useRouter();
    const [showModel, setShowModel] = useState(false);
    // console.log(router.query.tariff);
    const [data, setData]  = useState({
        tariff:router.query.tariff,
        destination:router.query.destination,
        client_name:"",
        client_email:"",
        pick_time:"",
        pick_date:"",
        client_request:"",
        car_type:"",
        contact:"",
        start:{
            name:"",
            lat:"",
            lng:""
        }
    });
    const { client_name, client_email, client_request, contact,pick_time,pick_date} = data;
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData((prevState) => ({
            ...prevState,
            [name]:value,
            tariff:router.query.tariff,
            destination:router.query.destination,
            pick_time:router.query.time,
            pick_date:new Date(router.query.date),
            car_type:router.query.car_type
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        if(currentUser){
            axios({
                method:'POST',
                url:`${process.env.API}/create/trip/${currentUser.user?._id}`,
                headers:{
                    Authorization:`Bearer ${currentUser.token}`
                },
                data:data
            }).then((response) => {
                console.log(response.data);
                makeToast("success", "Booking Success");
                setData((state) => ({
                    ...state,
                    client_email:"",
                    client_name:"",
                    client_request:"",
                    contact:"",
                }))
            }).catch((err) => {
                console.log(err.response.data.error);
                makeToast("error",err.response.data.error);
            })
        }else{
            toggle();
        }
        
    }
    
    return (
        <div className={styles.reviewBox}>
            <div className={styles.titleTop}>
                <h5>contact details</h5>
            </div>
            <div className={styles.guestDetail}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        {/* <div className={styles.NameRow}>
                            <div className={styles.firstName}> */}
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="client_name"
                                    onChange={handleChange}
                                    id="firstName"
                                    value={client_name}
                                    className={styles.formControl}
                                    placeholder="Full name"
                                    required
                                />
                            {/* </div> */}
                            {/* <div className={styles.lastName}>
                                <label>last name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className={styles.formControl}
                                    placeholder="Last name"
                                />
                            </div> */}
                        {/* </div> */}
                    </div>

                    <div className={styles.formGroup}>
                        <label>Email address</label>
                        <input
                            type="email"
                            name="client_email"
                            onChange={handleChange}
                            value={client_email}
                            className={styles.formControl}
                            placeholder="Enter email"
                            required
                        />
                        <small id="emailHelp" className={styles.formText}>
                            Booking confirmation will be sent to this email ID.
                        </small>
                    </div>
                
                        <div className={styles.formGroup}>
                            <label>Enter Pickup Location</label>
                            <Autocomplete
                            className={styles.formControl}
                            options={{
                                types:'address'
                            }}
                            apiKey="AIzaSyATzOQBhRyutho2AlgGTQnsybhNOkuACzI"
                            onPlaceSelected={(place) => {
                                setData((state) => ({
                                    ...state,
                                    start:{
                                        name:place?.formatted_address,
                                        lat:place?.geometry?.location?.lat(),
                                        lng:place?.geometry?.location?.lng()
                                    }
                                }));
                            }}
                            />
                            {/* <small id="emailHelp" className={styles.formText}>
                                Booking confirmation will be sent to this email ID.
                            </small> */}
                        </div>

                    <div className={styles.formGroup}>
                        <label>contact Number</label>
                        <input
                            id="mobile-no"
                            name="contact"
                            type="tel"
                            value={contact}
                            onChange={handleChange}
                            placeholder='Mobile Number'
                            className={styles.formControl}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="exampleFormControlTextarea1">
                            special request
                        </label>
                        <textarea
                            className={styles.formControl}
                            name="client_request"
                            onChange={handleChange}
                            value={client_request}
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
                            <div style={{cursor:'pointer'}} className={styles.inputGroupPrepend}>
                                <span className={styles.inputGroupText}>apply</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.submitBtn}>
                        <button
                            type="submit"
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
const mapStateToProps = (state) => ({
    currentUser : state.user.currentUser
  });
const mapDispatchToProps = (dispatch) => ({
    toggle : () =>  dispatch(toggleShow())
})

export default connect(mapStateToProps,mapDispatchToProps)(ContactDetails);
