import React from 'react'
import styles from '../styles/Services.module.css';
import ServicesCard from './ServicesCard';

const Services = () => {
    const dummyData = [
      {
        title: "Special rates on car booking",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      },
      {
        title: "Mobile Phone Reservation",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      },
      {
        title: "Unlimited Miles Car Rental",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      },
      {
        title: "One Way Car Rentals",
        para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor invidunt ut labore et dolore magnaed aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.",
      },
    ];
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Customer Services</h1>
        <span className={styles.underline}>&nbsp;</span>
        <div className={styles.CardWrapper}>
          {dummyData.map((element) => {
            return (
              <ServicesCard
                key={element.title}
                title={element.title}
                para={element.para}
              />
            );
          })}
        </div>
      </div>
    );
}

export default Services
