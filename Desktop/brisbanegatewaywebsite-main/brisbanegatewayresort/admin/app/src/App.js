import { Routes, Route } from "react-router-dom";
import React, { withRouter, useState, useEffect } from "react";
import Layout from "./Layout";
import Home from "./Home";
import DashLayout from "./DashLayout";
import Dashboard from "./Dashboard";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Longterm from "./long-term/Longterm";
import LongtermDetails from "./long-term/longterm_details/LongtermDetails";
import Offers from "./offers/Offers";
import OfferDetails from "./offers/OfferDetails";

function app(props) {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <Layout />
            </PublicRoute>
          }
        >
          <Route path={"/login"} index element={<Home />} />
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashLayout />
            </PrivateRoute>
          }
        >
          <Route path="/" index element={<Dashboard />} />
          <Route path="longterm" index element={<Longterm />}></Route>
          <Route path="/longterm/:id" element={<LongtermDetails />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers/:id" element={<OfferDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default app;
