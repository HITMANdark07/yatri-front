import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Banner from '../components/Banner';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import VehiclesModels from '../components/VehiclesModels';
import Footer from '../components/Footer';
import { style } from '@mui/system';
import VehicalsCard from '../components/VehicalsCard';
import LatestVideo from '../components/LatestVideo';
import Service from '../components/Service';
import BookingDeals from '../components/BookingDeals';
import Contact from '../components/Contact';
import Blog from '../components/Blog';

export default function Home() {
  const [counter, setCounter] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const event = window.addEventListener("scroll", toggleVisible);

    return () => event;
  },[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Yatri Cabs</title>
        <meta name="description" content="yatri cabs rental cars india best rental car services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className={styles.sectionOne}>
          <Navbar />
          <Banner />
        </div>
        <VehicalsCard />
        <LatestVideo />
        <Service />
        <BookingDeals />
        <Contact />
        {/* <Blog /> */}
        <Footer />
        <img
          src="/bx-up-arrow-alt.svg"
          onClick={scrollToTop}
          style={{
            zIndex: "100",
            position: "fixed",
            height: "40px",
            width: "40px",
            bottom: "5vh",
            right: "1.8rem",
            boderRadius: "10px",
            overflow: "hidden",
            backgroundColor: "rgb(255, 198, 0)",
            cursor: "pointer",
            display: visible ? "inline" : "none",
          }}
          className={styles.tapTop}
        />
      </div>
    </div>
  );
}
