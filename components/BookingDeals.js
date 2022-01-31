import React from 'react';
import styles from '../styles/BookingDeals.module.css';

const BookingDeals = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          {/* <h2>deals on booking</h2> */}
          {/* <span className={styles.underline}></span> */}
          <h2>Lucknow and Beyond</h2>
        </div>
        {/* <div className={styles.dealsRow}>
          <div className={styles.dealsColumn}>
            <div className={styles.deals}>
              <div className={styles.dealsContent}>
                <div className={styles.dealsDetail}>
                  <h3>marseille</h3>
                  <h2>
                    $102 <span> / per day</span>
                  </h2>
                </div>
                <img src="./barcode.png" alt="" className={styles.barcode} />
              </div>
              <div className={styles.dealsImage}>
                <img src="./video-image.jpg" alt="" className={styles.image} />
              </div>
            </div>
          </div>

          <div className={styles.dealsColumn}>
            <div className={styles.deals}>
              <div className={styles.dealsContent}>
                <div className={styles.dealsDetail}>
                  <h3>marseille</h3>
                  <h2>
                    $102 <span> / per day</span>
                  </h2>
                </div>
                <img src="./barcode.png" alt="" className={styles.barcode} />
              </div>
              <div className={styles.dealsImage}>
                <img src="./video-image.jpg" alt="" className={styles.image} />
              </div>
            </div>
          </div>

          <div className={styles.dealsColumn}>
            <div className={styles.deals}>
              <div className={styles.dealsContent}>
                <div className={styles.dealsDetail}>
                  <h3>marseille</h3>
                  <h2>
                    $102 <span> / per day</span>
                  </h2>
                </div>
                <img src="./barcode.png" alt="" className={styles.barcode} />
              </div>
              <div className={styles.dealsImage}>
                <img src="./video-image.jpg" alt="" className={styles.image} />
              </div>
            </div>
          </div>
        </div> */}

        <p>
          {`We are Yatri Car Rental an cab booking aggregator providing
          customers with reliable and premium Outstation and Local Car Rental
          Service. Over the last decade we are uniquely placed as the largest
          chauffeur driven car rental company in India in terms of geographical
          reach. Planning a weekend getaway? Our outstation cab services will
          help you explore the best destinations visit all the must-see places
          and taste the best local food Did you just land at an Airport or
          Railway Station closest to your destination No problem! You can use
          our Airport Taxi in Lucknow, Mumbai, Pune, Banglore, Varanasi
          Kalyan, the transit pick up service to cover the last mile. We will get
          you to your destination and show you some of the best sights along the
          way. Decided to take a personal day and spend the whole day exploring
          your city? Our Car Rental packages will help you explore the best
          places to eat and drink at, some of the citys majestic monuments,
          greenest parks and oldest temples. You will never have to worry about an
          empty travel itinerary again. Are you an offbeat traveller? Do you
          just hit the road and decide to take it from there? We offer one-way
          drops on several routes, in case you only want to be dropped to a
          destination and dont want to look back.`}
        </p>
      </div>
    );
}

export default BookingDeals
