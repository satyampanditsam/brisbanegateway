import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import MainDescription from "../MainDescription";
import LongtermCabinCards from "./LongtermCabinCards";
import LongtermForm from "./LongtermForm";

function Longterm(props) {
  return (
    <div>
      <Banner title="Long-term Cabins" />
      <MainDescription
        header="Quality long-term cabin accommodation in Brisbane"
        description="Our range of Long Term Rental Homes are available for fixed term stays. The homes are fully furnished and perfect for people requiring turn-key ready long term accommodation. All you will need to supply is your own linen, towels and blankets as housekeeping linen service is not available in this category. Utilities are already connected and metered separately. Rental is paid fortnightly in advance and a security bond (of 4 weeks) is also required. Inspections can be arranged from 9am to 4pm Monday to Friday by contacting us on the number listed below. Once the unit has been inspected by you, a simple application for tenancy needs to be completed for approval."
      />
      <LongtermCabinCards />
      <LongtermForm formTitle="Make an inquiry" cabinTitle="General inquiry" />
    </div>
  );
}

export default Longterm;
