import React, { useState } from "react";
import Layout from "./Layout";

import Home from "./pages/Home";
import HolidayCabins from "./pages/holidayCabins/HolidayCabins";
import Caravans from "./pages/caravans/Caravans";
import Facilities from "./pages/facilities/Facilities";
import Longterm from "./pages/long-term/Longterm";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Groups from "./pages/Groups/Groups";
import Offers from "./pages/offers/Offers";

import { HolidayCabinDetails } from "./pages/holidayCabins/HolidayCabinDetails";
import HolidayCabinDetailsTemplate from "./pages/holidayCabins/holidayCabinsPages/HolidayCabinDetailsTemplate";
import { Routes, Route } from "react-router-dom";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQ from "./pages/FAQ/FAQ";
import LongtermDetails from "./pages/long-term/LongtermDetails";
import LocalArea from "./pages/localArea/localArea";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="holidaycabins" element={<HolidayCabins />} />
          {HolidayCabinDetails.map((holidayCabin, index) => {
            return (
              <Route
                path={`holidaycabins/${holidayCabin.detailsPage}`}
                element={
                  <HolidayCabinDetailsTemplate
                    holidayCabin={holidayCabin}
                    index={index}
                  />
                }
              />
            );
          })}

          <Route path="caravans" element={<Caravans />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="long-term" element={<Longterm />} />
          <Route path="long-term/:cabin_id" element={<LongtermDetails />} />
          <Route path="groups" element={<Groups />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="offers" element={<Offers />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="local-area" element={<LocalArea />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
