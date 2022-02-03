import React, { useState } from "react";
import { FeatureSelection } from "./FeatureSelection";

function LongtermInput(props) {
  const [cabinInput, setCabinInput] = useState({
    cabin_title: "",
    availability: "available",
    weekly_price: "",
    min_stay: "",
    bedroom: "",
    bathroom: "",
    car_space: "",
    description: "",
  });
  const [imageInput, setImageInput] = useState([]);

  const [checked, setChecked] = useState([]);

  function handleChange(event) {
    setCabinInput({ ...cabinInput, [event.target.name]: event.target.value });
  }

  function handleImageInput(event) {
    setImageInput(event.target.files);
  }

  function handleCheckBox(event) {
    const updatedList = [...checked];
    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  }

  //Multipart form submit
  function handleSubmit(event) {
    event.preventDefault();
    if (!imageInput.length || !checked.length) {
      return;
    }
    const accessToken = localStorage.getItem("access_token");
    const data = new FormData();
    data.append("cabin_title", cabinInput.cabin_title);
    data.append("availability", cabinInput.availability);
    data.append("weekly_price", cabinInput.weekly_price);
    data.append("min_stay", cabinInput.min_stay);
    data.append("bedroom", cabinInput.bedroom);
    data.append("bathroom", cabinInput.bathroom);
    data.append("car_space", cabinInput.car_space);
    data.append("description", cabinInput.description);
    for (let i = 0; i < imageInput.length; i++) {
      data.append("cabin_images", imageInput[i]);
    }
    for (let i = 0; i < checked.length; i++) {
      data.append("features", checked[i]);
    }

    fetch("http://localhost:9000/createlongterm", {
      method: "POST",
      body: data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }).then((response) => {
      if (!response.ok) {
        console.log("fail");
      }
    });
  }

  return (
    <div>
      <form>
        <h1>Create long-term cabin</h1>
        <label>Cabin title</label>
        <br />
        <input
          type="text"
          id="cabin_title"
          name="cabin_title"
          value={cabinInput.cabin_title}
          onChange={handleChange}
        />
        <h3>Availability</h3>
        <input
          type="radio"
          id="available"
          name="availability"
          value="available"
          checked={cabinInput.availability === "available"}
          onChange={handleChange}
        />
        <label>Available</label>
        <br />
        <input
          type="radio"
          id="available_soon"
          name="availability"
          value="available_soon"
          checked={cabinInput.availability === "available_soon"}
          onChange={handleChange}
        />
        <label>Available soon</label>
        <br />
        <input
          type="radio"
          id="unavailable"
          name="availability"
          value="unavailable"
          checked={cabinInput.availability === "unavailable"}
          onChange={handleChange}
        />
        <label>Unavailable</label>
        <br />
        <label>Price / week</label>
        <br />
        <input
          type="text"
          id="weekly_price"
          name="weekly_price"
          value={cabinInput.weekly_price}
          onChange={handleChange}
        />
        <br />
        <label>Min month stay</label>
        <br />
        <input
          type="number"
          id="min_stay"
          name="min_stay"
          value={cabinInput.min_stay}
          onChange={handleChange}
        />
        <br />
        <label>Bedrooms</label>
        <br />
        <input
          type="number"
          id="bedroom"
          name="bedroom"
          value={cabinInput.bedroom}
          onChange={handleChange}
        />
        <br />
        <label>Bathrooms</label>
        <br />
        <input
          type="number"
          id="bathroom"
          name="bathroom"
          value={cabinInput.bathroom}
          onChange={handleChange}
        />
        <br />
        <label>Car spaces</label>
        <br />
        <input
          type="number"
          id="car_space"
          name="car_space"
          value={cabinInput.car_space}
          onChange={handleChange}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={cabinInput.description}
          onChange={handleChange}
        />
        <br />
        <h3>Features</h3>
        {FeatureSelection.map((feature) => {
          return (
            <div>
              <input
                type="checkbox"
                name={feature}
                id={feature}
                value={feature}
                onChange={handleCheckBox}
              ></input>
              <label>{feature}</label>
            </div>
          );
        })}
        <h3>Cabin Images</h3>
        <input
          type="file"
          id="image_input"
          name="image_input"
          onChange={handleImageInput}
          accept="image/x-png,image/gif,/image/jpeg"
          multiple
        />
        <br />
        <button onClick={handleSubmit}>Add Cabin</button>
      </form>
    </div>
  );
}

export default LongtermInput;
