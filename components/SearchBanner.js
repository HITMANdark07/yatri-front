import React from 'react';
import styles from '../styles/SearchBanner.module.css';
import { useRouter } from 'next/router';

const SearchBanner = () => {
    const route = useRouter();
    return (
        <div className={styles.container}>
            {
                route.asPath==='/book-cab' ?
                <h2>Book Your Favorite Cab</h2>
                :
                <h2>Search Your Favorite Cab</h2>
            }
            
        </div>
    )
}

export default SearchBanner
