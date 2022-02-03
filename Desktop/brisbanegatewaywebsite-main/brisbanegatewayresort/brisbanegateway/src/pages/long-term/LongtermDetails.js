import React, { useEffect, useState } from "react";
import LongtermFeatures from "./LongtermFeatures";
import { useLocation, useParams } from "react-router-dom";
import LongtermForm from "./LongtermForm";

function LongtermDetails(props) {
  const { cabin_id } = useParams();
  const [cabinTitle, setCabinTitle] = useState("");
  const [availability, setAvailability] = useState("");
  const [weeklyPrice, setWeeklyPrice] = useState("");
  const [minStay, setMinStay] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [carSpace, setCarSpace] = useState("");
  const [description, setDescription] = useState("");
  const [cabinImages, setCabinImages] = useState([""]);
  const [loaded, setLoaded] = useState(false);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9000/longterm-cabin/${cabin_id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${cabin_id}`,
        accept: "application/JSON",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCabinTitle(data.cabin_details.cabin_title);
        setWeeklyPrice(data.cabin_details.weekly_price);
        setAvailability(data.cabin_details.availability);
        setMinStay(data.cabin_details.min_stay);
        setBedroom(data.cabin_details.bedroom);
        setBathroom(data.cabin_details.bathroom);
        setCarSpace(data.cabin_details.car_space);
        setDescription(data.cabin_details.description);
        setCabinImages(data.cabin_images);
        const items = [];
        for (let i = 0; i < data.features.length; i++) {
          items.push(data.features[i].feature);
        }
        setFeatures(items);
      })
      .then(() => setLoaded(true));
  }, []);

  return (
    <div>
      {loaded ? (
        <div>
          {cabinImages.map((image) => {
            return (
              <div>
                <img
                  src={`http://localhost:9000/longterm-images/${image.img_src}`}
                />
              </div>
            );
          })}
          <h1>{cabinTitle}</h1>
          <p>${weeklyPrice} / week</p>
          <p>{`${minStay} months min stay`}</p>
          {availability === "available_soon" && <p>Available soon</p>}
          <LongtermFeatures
            bedroom={bedroom}
            bathroom={bathroom}
            car_space={carSpace}
          />
          <div>
            <p>{description}</p>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              {features.map((feature) => {
                return <li>{feature}</li>;
              })}
            </ul>
          </div>
          <div>
            <LongtermForm
              formTitle="Inquire about this cabin"
              cabinTitle={cabinTitle}
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LongtermDetails;
