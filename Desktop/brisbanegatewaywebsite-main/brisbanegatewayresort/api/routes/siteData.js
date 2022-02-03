// const express = require("express");
// const router = express.Router();
// const availability = require("./newbook").availabilityRes;
// const categories = require("./newbook").categoryRes;
import express from "express"
import router from express.Router()
import {availabilityRes} from ("./newbook")
import {categoryRes} from ("./newbook")

router.post("/", function (req, res, next) {

  const available = [];

  //Fetch availability data
  const newbookAvailablity = availabilityRes;
  const sortedAvailability = Object.values(newbookAvailablity.data).sort(
    (a, b) => a.sort - b.sort
  );

  let category;
  let tariffTotal;
  for (let i = 0; i < sortedAvailability.length; i++) {
    category = sortedAvailability[i];

    for (let i = 0; i < category.tariffs_available.length; i++) {
      if (category.tariffs_available[i].tariff_code == 18) {
        tariffTotal = category.tariffs_available[i].tariff_total;
      }
    }
    if (!tariffTotal) {
      res.sendStatus(500);
      return;
    }
    if (category.sites_available) {
      available.push({
        category_id: category.category_id,
        category_name: category.category_name,
        sites_available: category.sites_available,
        tariff_total: tariffTotal,
      });
    }
  }

  //Fetch category data
  //Added to list newbookcategory
  const newbookCategories = categoryRes;
  let categoryData;
  for (let i = 0; i < newbookCategories.length; i++) {
    categoryData = newbookCategories[i].data[0];
    available[i].max_adults = categoryData.category_max_adults;
    available[i].max_children = categoryData.category_max_children;
    available[i].max_infants = categoryData.category_max_infants;
    available[i].category_max_combined = categoryData.category_max_combined;
  }
  res.send(JSON.stringify({ site_data: available }));
});

module.exports = router;
