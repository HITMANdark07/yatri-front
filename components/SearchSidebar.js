import React,{ useState} from 'react';
import styles from '../styles/SearchSidebar.module.css';
import VehicalDetails from './VehicalDetails';

const carsData = [
  {
    id: 1,
    Name: "Peugeot Citroen",
    type: "Prime",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./10.png",
  },
  {
    id: 2,
    Name: "Suzuki",
    type: "Medium",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./6.png",
  },
  {
    id: 3,
    Name: "Fiat Chrysler",
    type: "Mini",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./3.png",
  },
  {
    id: 4,
    Name: "Honda",
    type: "Standard",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./6.png",
  },
  {
    id: 5,
    Name: "Ford",
    type: "Tempo Travel",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./7.png",
  },
  {
    id: 6,
    Name: "Bus",
    type: "Bus",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./8.png",
  },
  {
    id: 7,
    Name: "Peugeot Citroen",
    type: "Sedan",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./10.png",
  },
  {
    id: 8,
    Name: "Peugeot Citroen",
    type: "Sedan",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    Fare: "$25",
    TotalFare: "$1200",
    image: "./3.png",
  },
  {
    id: 9,
    Name: "Peugeot Citroen",
    type: "Mini",
    seats: "5",
    ac: "AC",
    luggage: "2",
    start: "Automatic",
    fare: "$25",
    totalFare: "$1200",
    image: "./6.png",
  },
];

const categories = [
  {
    Name: "Car Type",
    Imgplus: "+",
    ImgMin: "-",
  },

  {
    Name: "Star Type",
    Imgplus: "+",
    ImgMin: "-",
  },

  {
    Name: "Price",
    Imgplus: "+",
    ImgMin: "-",
  },

  {
    Name: "Capacity",
    Imgplus: "+",
    ImgMin: "-",
  },

  {
    Name: "Car Option",
    Imgplus: "+",
    ImgMin: "-",
  },
];

const SearchSidebar = () => {
  const [showCategory, setShowCategory] = useState(false);
    return (
      <div className={styles.container}>
        {/* <div className={styles.sidebar}>
          <div className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search here.."
              className={styles.input}
            />
            <img className={styles.searchIcon} src="./bx-search-alt-2.svg" />
          </div>

          <div className={styles.middlePart}>
            <h5>Filter Category</h5>
            <img
              className={styles.adjust}
              src="./adjust.png"
              onClick={() => setShowCategory((prev) => !prev)}
            />
          </div>
          {
            categories.map((category) => {
              return (
                <div
                  className={
                    showCategory ? styles.middlePart : { display: "none" }
                  }
                  key={category.Name}
                >
                  <h5
                    style={{ display: showCategory ? "flex" : "none" }}
                    className={styles.categoryTitle}
                  >
                    {category.Name}
                  </h5>
                  <span
                    style={{ display: showCategory ? "flex" : "none" }}
                    className={styles.categoryIcon}
                  >
                    {category.Imgplus}
                  </span>
                </div>
              );
            })}

          <div className={styles.bottomInfo}>
            <h5>
              <span>i</span> need help
            </h5>
            <h4>856 - 215 - 211</h4>
            <h6>Monday to Friday 9.00am - 7.30pm</h6>
          </div>
        </div> */}
        <div className={styles.body}>
          {carsData.map((car) => {
            return <VehicalDetails key={car.id} {...car} />;
          })}
        </div>
      </div>
    );
}

export default SearchSidebar
