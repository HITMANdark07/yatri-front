import Link from 'next/link';
import React from 'react';
import styles from '../styles/Blog.module.css';

const Blog = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>our blog</h2>
          <span className={styles.underline}></span>
        </div>
        <div className={styles.blogContainer}>
          <div className={styles.blogBox}>
            <div className={styles.imgPart}>
              <div>
                <img src="./1.jpg" className={styles.img} alt="" />
              </div>
              <div className={styles.blogDate}>
                <div>
                  <h5>01</h5>
                  <h6>jan</h6>
                </div>
              </div>
            </div>
            <div className={styles.blogContent}>
              <div>
                <h5>posted by: Julia Holmes</h5>
                <p>
                  Lorem Ipsum is simply the of the printing and dummy text of
                  typesetting..
                </p>
                <h6>Lorem Ipsum is simply dummy since..</h6>
                <Link href="">
                  <span className={styles.btn}>Read More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.blogBox}>
            <div className={styles.imgPart}>
              <div>
                <img src="./1.jpg" className={styles.img} alt="" />
              </div>
              <div className={styles.blogDate}>
                <div>
                  <h5>01</h5>
                  <h6>jan</h6>
                </div>
              </div>
            </div>
            <div className={styles.blogContent}>
              <div>
                <h5>posted by: Julia Holmes</h5>
                <p>
                  Lorem Ipsum is simply the of the printing and dummy text of
                  typesetting..
                </p>
                <h6>Lorem Ipsum is simply dummy since..</h6>
                <Link href="">
                  <span className={styles.btn}>Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog
