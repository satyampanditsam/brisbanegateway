import React, { useState } from "react";
import Button1 from "../Button1";
import banner from "../assets/images/facilities_home.jpg";
import about1 from "../assets/images/1-home.jpg";
import about2 from "../assets/images/2-home.jpg";
import about3 from "../assets/images/3-home.jpg";
import about4 from "../assets/images/4-home.jpg";
import about5 from "../assets/images/5-home.jpg";
import about6 from "../assets/images/6-home.jpg";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <div className="home_banner">
        <img src={banner} alt="" className="home_banner_image" />
        <div className="home_banner_content">
          <h1>Brisbane Gateway Resort</h1>
          {/* <Button1
            buttonText="Book Now"
            url="https://bookingsau.newbook.cloud/brisbane_gateway_resort/"
          /> */}
        </div>
      </div>
      <div className="about_content">
        <div className="container">
          <div className="about_content_inner">
            <div className="row no-gutters flex-row-reverse">
              <div className="col-md-5">
                <img src={about1} alt="" className="img-fluid" />
              </div>
              <div className="col-md-7">
                <div className="about_text">
                  <h2>A relaxing stay close to the Brisbane CBD</h2>
                  <p>
                    Stay and relax only 19 minutes to the Brisbane CBD. Our modern holiday
                    cabin accommodation and resort style facilities make us the ideal
                    destination for a family holiday in Brisbane. We’re one of the top
                    caravan parks in Brisbane and Queensland, offering neat and spacious
                    powered caravan sites. Holiday the resort way, with access to our
                    sparkling blue pool, full sized tennis court, recreation room and
                    adventure playground. We offer large group accommodation for schools,
                    clubs, sporting teams, corporate, and family events. Additionally, we
                    have a range of long-term rental cabins which offer great value for
                    money. Our friendly staff will make you feel right at home the moment
                    you arrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about_content_inner">
            <div className="row no-gutters">
              <div className="col-md-7">
                <img src={about2} alt="" className="img-fluid" />
              </div>
              <div className="col-md-5">
                <div className="about_text">
                  <h2>Holiday Cabins</h2>
                  <p>
                    Catering to travellers and holiday makers who appreciate quality,
                    cleanliness and excellent value for money, Brisbane Gateway Resort has
                    a full range of holiday cabin accommodation suitable for single
                    travellers, couples, families and groups.
                  </p>
                  <div className="pt-3">
                    <Button1 buttonText="View Cabins" url="holidaycabins" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_content_inner">
            <div className="row no-gutters">
              <div className="col-md-7">
                <img src={about3} alt="" className="img-fluid" />
              </div>
              <div className="col-md-5">
                <div className="about_text">
                  <h2>Powered Caravan Sites</h2>
                  <p>
                    Stay at one of the top caravan parks in Brisbane and Queensland. We
                    offer spacious and neat powered caravan sites for caravans,
                    motorhomes, campervans, and camper-trailers. Our well maintained
                    lawned sites are set amongst nature and gardens. All sites have
                    electricity, water and waste-water services and are well drained.
                  </p>
                  <div className="pt-3">
                    <Button1 buttonText="View Caravan Sites" url="caravans" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_facilities">
            <h2>Facilities</h2>
            <p>
              Have a memorable holiday with our resort style facilities, featuring a
              sparkling <br />blue pool, full-size tennis court, adventure playground and
              more.
            </p>
            <div className="about_facilities_list">
              <div className="row">
                <div className="col-md-4">
                  <Link to="/facilities">
                    <img src={about4} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/facilities">
                    <img src={about5} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link to="/facilities">
                    <img src={about6} alt="" className="img-fluid" />
                  </Link>
                </div>
              </div>
              <div className="pt-5">
                <Button1 buttonText="View all facilities" url="facilities" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
