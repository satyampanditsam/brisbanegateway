import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LongtermFeatures from "../LongtermFeatures";
import { FeatureSelection } from "../FeatureSelection";

// Fix list being sent from db
function LongtermDetails(props) {
  const { id } = useParams();
  const [cabinDetails, setCabinDetails] = useState({
    cabin_tite: "",
    availability: "",
    min_stay: "",
    weekly_price: "",
    bedroom: "",
    bathroom: "",
    car_space: "",
    description: "",
  });
  const [cabinImages, setCabinImages] = useState([]);
  const [imageInput, setImageInput] = useState([]);
  const [imagesDelete, setImagesDelete] = useState([]);
  const [activeFeatures, setActiveFeatures] = useState([]);
  const [checkedFeature, setCheckedFeature] = useState([]);

  const [editTitle, setEditTitle] = useState("");
  const [editAvailability, setEditAvailability] = useState("");
  const [editMinStay, setEditMinStay] = useState("");
  const [editWeeklyPrice, setEditWeeklyPrice] = useState("");
  const [editBedroom, setEditBedroom] = useState("");
  const [editBathroom, setEditBathroom] = useState("");
  const [editCarSpace, setEditCarSpace] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9000/longterm-admin/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        //Current Cabin State
        setCabinDetails(data.details);
        //Edit Cabin State
        setEditTitle(data.details.cabin_title);
        setEditAvailability(data.details.availability);
        setEditMinStay(data.details.weekly_price);
        setEditWeeklyPrice(data.details.min_stay);
        setEditBedroom(data.details.bedroom);
        setEditBathroom(data.details.bathroom);
        setEditCarSpace(data.details.car_space);
        setEditDescription(data.details.description);
        setCabinImages(data.images);
        setActiveFeatures(data.features);
        //Set initially checked boxes
        const isChecked = FeatureSelection.map((feature) => {
          return data.features.includes(feature);
        });
        setCheckedFeature(isChecked);
      })
      .then(setDataLoaded(true));
  }, []);

  function handleImageInput(event) {
    setImageInput(event.target.files);
  }

  function handleImageDelete(image) {
    if (!imagesDelete.includes(image)) {
      setImagesDelete([...imagesDelete, image]);
    }
  }

  function handleCheckBox(event, position) {
    const updatedChecked = checkedFeature.map((item, index) => {
      if (index == position) {
        return !item;
      } else {
        return item;
      }
    });
    setCheckedFeature(updatedChecked);
  }

  function editLongterm(event) {
    event.preventDefault();
    const accessToken = localStorage.getItem("access_token");
    const data = new FormData();
    for (let i = 0; i < imageInput.length; i++) {
      data.append("cabin_images", imageInput[i], imageInput[i].name);
    }
    data.append("cabin_title", editTitle);
    const updatedFeature = FeatureSelection.filter((feature, index) => {
      return checkedFeature[index];
    });
    for (let i = 0; i < updatedFeature.length; i++) {
      data.append("features", updatedFeature[i]);
    }
    data.append("availability", editAvailability);
    data.append("min_stay", editMinStay);
    data.append("weekly_price", editWeeklyPrice);
    data.append("bedroom", editBedroom);
    data.append("bathroom", editBathroom);
    data.append("car_space", editCarSpace);
    data.append("description", editDescription);
    for (let i = 0; i < imagesDelete.length; i++) {
      data.append("images_delete", imagesDelete[i]);
    }
    fetch(`http://localhost:9000/editlongterm/${id}`, {
      method: "POST",
      body: data,
      headers: {
        authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    }).then((response) => {
      if (!response.ok) {
        console.log("Fail");
        return;
      }
      console.log("success");
    });
  }

  if (dataLoaded) {
    return (
      <div>
        <div>
          <div>
            {cabinImages.map((image) => {
              return (
                <div>
                  <img src={`http://localhost:9000/longterm-images/${image}`} />
                  <button onClick={() => handleImageDelete(image)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            <h1>{cabinDetails.cabin_title}</h1>
            <p>${cabinDetails.weekly_price} / week</p>
            <p>{`${cabinDetails.min_stay} months min stay`}</p>
            <p>{cabinDetails.availability}</p>
          </div>
          <div>
            <LongtermFeatures
              bedroom={cabinDetails.bedroom}
              bathroom={cabinDetails.bathroom}
              car_space={cabinDetails.car_space}
            />
          </div>
          <div>
            <p>{cabinDetails.description}</p>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              {activeFeatures.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
        </div>
        <div>
          <h1>Edit Cabin</h1>
          <form>
            <label>Cabin title</label>
            <br />
            <input
              type="text"
              id="cabin_title"
              name="cabin_title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <h3>Availability</h3>
            <input
              type="radio"
              id="available"
              name="availability"
              value="available"
              checked={editAvailability === "available"}
              onChange={(e) => setEditAvailability(e.target.value)}
            />
            <label>Available</label>
            <br />
            <input
              type="radio"
              id="available_soon"
              name="availability"
              value="available_soon"
              checked={editAvailability === "available_soon"}
              onChange={(e) => setEditAvailability(e.target.value)}
            />
            <label>Available soon</label>
            <br />
            <input
              type="radio"
              id="unavailable"
              name="availability"
              value="unavailable"
              checked={editAvailability === "unavailable"}
              onChange={(e) => setEditAvailability(e.target.value)}
            />
            <label>Unavailable</label>
            <br />
            <label>Price / week</label>
            <br />
            <input
              type="text"
              id="weekly_price"
              name="weekly_price"
              value={editWeeklyPrice}
              onChange={(e) => setEditWeeklyPrice(e.target.value)}
            />
            <br />
            <label>Min month stay</label>
            <br />
            <input
              type="number"
              id="min_stay"
              name="min_stay"
              value={editMinStay}
              onChange={(e) => setEditMinStay(e.target.value)}
            />
            <br />
            <label>Bedrooms</label>
            <br />
            <input
              type="number"
              id="bedroom"
              name="bedroom"
              value={editBedroom}
              onChange={(e) => setEditBedroom(e.target.value)}
            />
            <br />
            <label>Bathrooms</label>
            <br />
            <input
              type="number"
              id="bathroom"
              name="bathroom"
              value={editBathroom}
              onChange={(e) => setEditBathroom(e.target.value)}
            />
            <br />
            <label>Car spaces</label>
            <br />
            <input
              type="number"
              id="car_space"
              name="car_space"
              value={editCarSpace}
              onChange={(e) => setEditCarSpace(e.target.value)}
            />
            <br />
            <label>Description</label>
            <br />
            <textarea
              id="description"
              name="description"
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />
            <br />
            <h3>Features</h3>
            {FeatureSelection.map((feature, index) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    name={feature}
                    id={feature}
                    value={feature}
                    onChange={(event) => handleCheckBox(event, index)}
                    checked={checkedFeature[index]}
                  ></input>
                  <label>{feature}</label>
                </div>
              );
            })}
            <label>Select images</label> <br />
            <input
              type="file"
              id="cabinImages"
              name="cabinImages"
              onChange={handleImageInput}
              accept="image/x-png,image/gif,/image/jpeg"
              multiple
            />
            <br />
            <button onClick={editLongterm}>Save Changes</button>
          </form>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default LongtermDetails;
