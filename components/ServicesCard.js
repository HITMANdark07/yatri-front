import React from 'react';
import styles from "../styles/Services.module.css";

const ServicesCard = ({title,para}) => {
    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <span className={styles.icon}>+</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
            <p className={styles.para}>{para}</p>
        </div>
    )
}

export default ServicesCard
