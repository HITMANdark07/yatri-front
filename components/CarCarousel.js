import React from "react";
import Slider from "react-slick";
import styles from "../styles/Banner.module.css";


export default class CarCarousel extends React.PureComponent {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings} className={styles.slider}>
          <div>
            <h1>Testimonial</h1>
            <img className={styles.sliderImage} src="./car1.png" />
          </div>
          <div>
            <h1>Testimonial</h1>
            <img className={styles.sliderImage} src="./car2.png" />
          </div>
        </Slider>
      </div>
    );
  }
}
