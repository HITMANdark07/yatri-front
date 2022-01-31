import React, { useState } from "react";
import classes from "../styles/VehiclesModels.module.css";

const cars = [
  {
    Name: "Maruti",
    Models: "chevrolet 1",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle1.png",
  },
  {
    Name: "suzuki",
    Models: "chevrolet 2",
    Rent: "$36.89 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle2.png",
  },
  {
    Name: "verna",
    Models: "chevrolet 3",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle3.png",
  },
  {
    Name: "xu-v",
    Models: "chevrolet 4",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle4.png",
  },
  {
    Name: "honda",
    Models: "chevrolet 5",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle5.png",
  },
  {
    Name: "hero",
    Models: "chevrolet 6",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle1.png",
  },
  {
    Name: "swift",
    Models: "chevrolet 7",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle2.png",
  },
  {
    Name: "desize",
    Models: "chevrolet 7",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle3.png",
  },
  {
    Name: "baleeno",
    Models: "chevrolet 8",
    Rent: "$34.78 per day",
    Doors: "4",
    Luggage: "2 suitcase/2 bags",
    AirConditioning: "Yes",
    MinimumAge: "25 years",
    Tranmission: "Automatic",
    image: "./vehicle4.png",
  },
];

const VehiclesModels = () => {
  const [preArray, setArray] = useState(cars);

  const clickHandler = (direction, i) => {
    if (direction === "next") {
      var crs = [...preArray];
      var temp = crs[0];
      crs.shift();
      crs.push(temp);
      setArray(crs);
    }
    if (direction === "prev") {
      var crs = [...preArray];
      var temp = crs.pop();
      crs.unshift(temp);
      setArray(crs);
    }
    if (direction === "selected") {
      var crs = [...preArray];
      var temp = crs[i];
      crs.splice(i, 1);
      crs.unshift(temp);
      setArray(crs);
    }
  };
  return (
    <div className={classes.VehiclesModels}>
      <h1 className={classes.heading}>Vehicle Models</h1>
      <span className={classes.underline}>&nbsp;</span>
      <div className={classes.container}>
        <div className={classes.Carousel}>
          <div>
            {preArray.map((item, idx) => (
              <button
                key={item.Name}
                className={classes.CarButton}
                onClick={() => clickHandler("selected", idx)}
                style={{
                  backgroundColor: idx === 0 ? "rgba(219, 13, 47,0.3)" : "pink",
                  color: idx === 0 ? "white" : "#000",
                  fontSize: idx === 0 ? "15px" : "13px",
                }}
              >
                <div
                  className={classes.myText}
                  style={{
                    fontWeight: idx === 0 ? "bold" : "lighter",
                  }}
                >
                  {item.Name.toUpperCase()}
                </div>
              </button>
            ))}
          </div>

          <button
            className={classes.carouselButton}
            onClick={() => clickHandler("prev")}
          >
            <img src="./prev.svg" alt="prev" />
          </button>
          <button
            className={classes.carouselButton}
            onClick={() => clickHandler("next")}
          >
            <img src="./next.svg" alt="next" />
          </button>
        </div>
        <div className={classes.images}>
          {preArray.map((car, idx) => (
            <img
              style={{
                opacity: idx === 0 ? 1 : 0,
                transition: "opacity 1.2s linear",
                position: "absolute",
              }}
              key={car.Name}
              src={car.image}
              alt={car.Name}
            />
          ))}
        </div>
        <div
          className={classes.description}
        >
          <div className={classes.descriptionHeading}>{preArray[0].Rent}</div>
          <ul>
            <li>Model: {preArray[0].Models}</li>
            <li>Doors: {preArray[0].Doors}</li>
            <li>Luggage: {preArray[0].Luggage}</li>
            <li>Air Conditioning : {preArray[0].AirConditioning}</li>
            <li>Minimum age: {preArray[0].MinimumAge}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehiclesModels;
