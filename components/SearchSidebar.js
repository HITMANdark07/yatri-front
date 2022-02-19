import React,{ useState} from 'react';
import {useRouter} from 'next/router';
import styles from '../styles/SearchSidebar.module.css';
import VehicalDetails from './VehicalDetails';
import axios from 'axios';

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

// const categories = [
//   {
//     Name: "Car Type",
//     Imgplus: "+",
//     ImgMin: "-",
//   },

//   {
//     Name: "Star Type",
//     Imgplus: "+",
//     ImgMin: "-",
//   },

//   {
//     Name: "Price",
//     Imgplus: "+",
//     ImgMin: "-",
//   },

//   {
//     Name: "Capacity",
//     Imgplus: "+",
//     ImgMin: "-",
//   },

//   {
//     Name: "Car Option",
//     Imgplus: "+",
//     ImgMin: "-",
//   },
// ];

const SearchSidebar = () => {
  const router = useRouter();
  const start = router.query.start;
  const trip = router.query.trip_type;
  const subtrip = router.query.sub_trip;

  const [showCategory, setShowCategory] = useState(false);
  const [distance, setDistance] = useState();
  const [active, setActive] = useState(true);
  const [val, setVal] = useState(subtrip ? subtrip : '8HRS/80KM');
  const [tarrifs, setTarrifs] = useState([]);

  const init = (sbt) => {
    axios({
      method:'GET',
      url:`${process.env.API}/tariff/get?start=${start}&trip=${trip}&subtrip=${sbt}`,
    }).then((res) => {
      let formatedData = [];
      res.data.forEach((data) => {
        formatedData.push({
          _id:data._id,
          Name:data?.category?.title,
          type:'None',
          seats: data?.category?.seats,
          gst:data?.gst,
          ac: data?.category?.ac ? "AC": "NON-AC",
          luggage: data?.category?.luggage,
          start: "Automatic",
          Fare: data.extra_km,
          TotalFare: data.min_fare,
          image: `${process.env.API}/category/photo/${data.category._id}`,
        })
      });
      setTarrifs(formatedData);
    }).catch((err) => {
      console.log(err);
    })
  }
  const handleClick = (e) => {
    setVal(e.target.value);
    init(e.target.value);
    //setRightActive(!rightActive)
  }
  React.useEffect(() => {
    switch (trip) {
      case 'LOCAL':
        setVal("8HRS/80KM");
        init("8HRS/80KM");
        break;
      case 'OUTSTATION':
        setVal("ONEWAY");
        init(subtrip);
        break;
      case 'AIRPORT':
        setVal("CAB_FROM_AIRPORT");
        init(subtrip);
        break;
      default:
        setVal("8HRS/80KM");
    }

  },[trip]);


  console.log(val,active);

  const showMenu = () => {
    if(trip==='LOCAL'){
      console.log(val === "8HRS/80KM");
      return (
        <div className={styles.btnGroup}>
          <button
            style={{
              backgroundColor: val === "8HRS/80KM" ? "#e9b30e" : "",
              color: val === "8HRS/80KM" ? "#fff" : "",
            }}
            onClick={handleClick}
            value="8HRS/80KM"
          >
            8hr | 80km
          </button>
          <button
            style={{
              backgroundColor: val === "12HRS/120KM" ? "#e9b30e" : "",
              color: val === "12HRS/120KM" ? "#fff" : "",
            }}
            onClick={handleClick}
            value="12HRS/120KM"
          >
            12hr | 120km
          </button>
        </div>
      );
    }
    // else if(trip==='OUTSTATION'){
    //   return (
    //     <div className={styles.btnGroup}>
    //       <button
    //         style={{
    //           backgroundColor: val === "ONEWAY" ? "#e9b30e" : "",
    //           color: val === "ONEWAY" ? "#fff" : "",
    //         }}
    //         onClick={handleClick}
    //         value="ONEWAY"
    //       >
    //         ONEWAY
    //       </button>
    //       <button
    //         style={{
    //           backgroundColor: val === "ROUND_TRIP" ? "#e9b30e" : "",
    //           color: val === "ROUND_TRIP" ? "#fff" : "",
    //         }}
    //         onClick={handleClick}
    //         value="ROUND_TRIP"
    //       >
    //         ROUND TRIP
    //       </button>
    //     </div>
    //   );
    // }else{
    //   return (
    //     <div className={styles.btnGroup}>
    //       <button
    //         style={{
    //           backgroundColor: val === "CAB_FROM_AIRPORT" ? "#e9b30e" : "",
    //           color: val === "CAB_FROM_AIRPORT" ? "#fff" : "",
    //         }}
    //         onClick={handleClick}
    //         value="CAB_FROM_AIRPORT"
    //       >
    //         CAB FROM AIRPORT
    //       </button>
    //       <button
    //         style={{
    //           backgroundColor: val === "CAB_TO_AIRPORT" ? "#e9b30e" : "",
    //           color: val === "CAB_TO_AIRPORT" ? "#fff" : "",
    //         }}
    //         onClick={handleClick}
    //         value="CAB_TO_AIRPORT"
    //       >
    //         CAB TO AIRPORT
    //       </button>
    //     </div>
    //   );
    // }
  }
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
          {showMenu()}
          <div className={styles.vehiclesGroup}>
            {tarrifs.map((car) => {
              return <VehicalDetails key={car.id} {...car} />;
            })}
          </div>
        </div>
      </div>
    );
}

export default SearchSidebar
