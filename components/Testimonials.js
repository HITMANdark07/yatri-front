import React from "react";
import Slider from "react-slick";
import styles from "../styles/Testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends React.PureComponent {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      fadeSpeed: 1000,
    };

    return (
      <div className={styles.container}>
        <div className={styles.starContainer}>
          <img className={styles.star} src=".\bxs-star.svg" />
          <img className={styles.star} src=".\bxs-star.svg" />
          <img className={styles.bigStar} src=".\bxs-star.svg" />
          <img className={styles.star} src=".\bxs-star.svg" />
          <img className={styles.star} src=".\bxs-star.svg" />
        </div>
        <Slider {...settings} className={styles.wrapper}>
          <div>
            <p className={styles.para}>
              It is always a positive experience when renting from your 5th
              street location. The staff is very professional and efficient and
              always smiling. And I always feel welcome and appreciated. The
              management is always prompt to solve any issue at any moment.
              Their efficiency and professionalism makes it my number one
              choice...
            </p>
            <p className={styles.name}>-Michael Smith, Santa Barbara CA</p>
          </div>
          <div>
            <p className={styles.para}>
              This rental was the best rental experience ever! After completing
              all details on-line myself, the pick-up was super efficient,
              extremely friendly, and free of the usual 5 - 10 min very
              unpleasant drilling of why one is not signing up to all options
              (insurance, etc). I was handed the keys and a wide register print
              out that required...
            </p>
            <p className={styles.name}>-Jon Doe, Las Vegas NV</p>
          </div>
          <div>
            <p className={styles.para}>
              This was my first time renting from car|rental. And over all it
              was a wonderful experience I have no complaints. The service rep
              help me find the best rental to suit my needs. I also love the
              fact that you guys provide luxury rentals at a great price. I will
              definitely rent with this company again...
            </p>
            <p className={styles.name}>Michael Smith, Santa Barbara CA</p>
          </div>
        </Slider>
      </div>
    );
  }
}
