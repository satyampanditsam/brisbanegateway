exports.availabilityRes = {
  success: "true",
  data: {
    16: {
      category_id: 16,
      category_name: "One Bedroom Holiday Villa",
      sites_available: 2,
      sites_message: "",
      sites_code: 0,
      sites_extra_info: "",
      online_booking_url:
        "your_online_booking_url_here?available_from=1442239200&available_to=1442887939&force_category_id=16",
      tariffs_available: [
        {
          tariff_label: "Special",
          tariff_short_description:
            "Special Rate available for the Peak Seasons of the year",
          tariff_success: "true",
          tariff_message: "",
          tariff_code: 2,
          tariff_extra_info: "",
          tariff_total: "703.95",
          tariff_inclusions: [
            {
              dates: "28 Jan 2022 to 04 Feb 2022",
              html: "<p>Includes Breakfast</p>",
            },
          ],
          inventory_items: [
            {
              inventory_item_id: "2",
              item_type: "charges",
              description: "Security Bond",
              amount: "100.00",
              amount_already_included_in_tariff_total: "false",
              discounts_apply: "0",
            },
          ],
          online_cart_url:
            "your_online_booking_url_here?rest_api_data=hj234brt89724bn49",
        },
        {
          tariff_label: "Theme Park Package",
          tariff_short_description: "Stay and Play at our local theme parks",
          tariff_success: "false",
          tariff_message: "There is a minimum stay length of 10 Nights",
          tariff_code: 18,
          tariff_extra_info: "10",
          tariff_total: "1269.00",
          inventory_items: [
            {
              inventory_item_id: "4",
              item_type: "charges",
              description: "Theme Park Tickets",
              amount: "50.00",
              amount_already_included_in_tariff_total: "true",
              discounts_apply: "0",
            },
          ],
        },
      ],
      sort: 1,
    },
    5: {
      category_id: 5,
      category_name: "Two Bedroom Holiday Villa",
      sites_available: 4,
      sites_message:
        "Minimum Advance Days has not been met, so there are no Sites available",
      sites_code: 2,
      sites_extra_info: "3",
      online_booking_url:
        "your_online_booking_url_here?available_from=1442239200&available_to=1442887939&force_category_id=5",
      tariffs_available: [
        {
          tariff_label: "Standard",
          tariff_short_description: "Standard pricing for regular season",
          tariff_success: "true",
          tariff_message: "",
          tariff_code: 18,
          tariff_extra_info: "",
          tariff_total: "900",
          inventory_items: [],
        },
      ],
      sort: 2,
    },
    6: {
      category_id: 6,
      category_name: "Three Bedroom Holiday Villa",
      sites_available: 0,
      sites_message:
        "Minimum Advance Days has not been met, so there are no Sites available",
      sites_code: 8,
      sites_extra_info: "3",
      online_booking_url:
        "your_online_booking_url_here?available_from=1442239200&available_to=1442887939&force_category_id=5",
      tariffs_available: [
        {
          tariff_label: "Standard",
          tariff_short_description: "Standard pricing for regular season",
          tariff_success: "true",
          tariff_message: "",
          tariff_code: 18,
          tariff_extra_info: "",
          tariff_total: "900",
          inventory_items: [],
        },
      ],
      sort: 3,
    },
    7: {
      category_id: 7,
      category_name: "One Bedroom Resort Home",
      sites_available: 8,
      sites_message:
        "Minimum Advance Days has not been met, so there are no Sites available",
      sites_code: 8,
      sites_extra_info: "3",
      online_booking_url:
        "your_online_booking_url_here?available_from=1442239200&available_to=1442887939&force_category_id=5",
      tariffs_available: [
        {
          tariff_label: "Standard",
          tariff_short_description: "Standard pricing for regular season",
          tariff_success: "true",
          tariff_message: "",
          tariff_code: 18,
          tariff_extra_info: "",
          tariff_total: "900",
          inventory_items: [],
        },
      ],
      sort: 4,
    },
  },
  message: "",
};

exports.categoryRes = [
  {
    success: "true",
    data: [
      {
        category_id: 16,
        category_name: "One Bedroom Holiday Villa",
        category_description:
          "A stylish holiday apartment ideally situated within the boardwalk entertainment precinct of the Surfers Paradise. Private balcony with amazing views. A walk or bike ride into Surfers Paradise central. Beautiful water ways, foreshore parks and playgrounds, rustic coastline with surf, fishing and swimming beaches.",
        category_short_description:
          "Luxurious Holiday Rental apartment situated within the boardwalk entertainment precinct of Surfers Paradise.",
        category_type_id: "7",
        category_type_name: "Apartment",
        category_virtual_tour_url:
          "https://www.newbook.cloud/virtual_tour_link",
        category_max_adults: "3",
        category_max_children: null,
        category_max_infants: "0",
        category_max_animals: "0",
        category_max_combined: "2",
        sites: [
          {
            site_id: "81",
            site_name: "Luxury Holiday Rental",
            site_description:
              "A stylish holiday apartment ideally situated within the boardwalk entertainment precinct of the Surfers Paradise. Private balcony with amazing views. A walk or bike ride into Surfers Paradise central. Beautiful water ways, foreshore parks and playgrounds, rustic coastline with surf, fishing and swimming beaches.",
            site_short_description:
              "Luxurious Holiday Rental apartment situated within the boardwalk entertainment precinct of Surfers Paradise.",
            site_status: "Clean",
            site_street: "Level 2, 9 Ouyan Street",
            site_city: "Surfers Paradise",
            site_postcode: "4217",
            site_state_id: 4,
            site_state_name: "Queensland",
            site_country_id: 13,
            site_country_name: "Australia",
            site_lat: "153.4177429",
            site_long: "-28.0031270",
            level_id: "",
            level_name: "",
            site_size: {
              id: "1",
              name: "10x10",
              length: "10.00",
              width: "10.00",
              height: "0.00",
              unit: "m",
            },
            parent_id: null,
            child_ids: [],
            custom_fields: [
              {
                id: 1,
                type: "text",
                label: "Suitable for Families",
                value: "No this is accommodation designed for couples-only",
              },
            ],
            site_images: [],
            site_features_specified: false,
            site_features: [],
            map_markers: [],
            notes: [],
          },
        ],
        features: [
          {
            feature_id: "1",
            feature_name: "Air conditioned",
            feature_count: "1",
          },
          {
            feature_id: "2",
            feature_name: "Balcony",
            feature_count: "2",
          },
        ],
        bedding: [
          {
            bedding_type_id: "2",
            bedding_type_name: "Queen",
            bedding_count: "1",
          },
          {
            bedding_type_id: "4",
            bedding_type_name: "Bunks double & single set",
            bedding_count: "1",
          },
        ],
        images: [
          {
            image_type_id: "23",
            image_type_name: "Bedroom",
            image_url:
              "https://driveau.newbook.cloud/instances_3b951b501ee06d886428eef064d803d2_588050ccc3a87.jpeg",
          },
          {
            image_type_id: "24",
            image_type_name: "Bathroom",
            image_url:
              "https://driveau.newbook.cloud/instances_3b951b501ee06d886428eef064d803d2_58804da109eb9.jpeg",
          },
        ],
      },
    ],
    message: "",
  },
  {
    success: "true",
    data: [
      {
        category_id: 5,
        category_name: "Two Bedroom Holiday Villa",
        category_description:
          "A stylish holiday apartment ideally situated within the boardwalk entertainment precinct of the Surfers Paradise. Private balcony with amazing views. A walk or bike ride into Surfers Paradise central. Beautiful water ways, foreshore parks and playgrounds, rustic coastline with surf, fishing and swimming beaches.",
        category_short_description:
          "Luxurious Holiday Rental apartment situated within the boardwalk entertainment precinct of Surfers Paradise.",
        category_type_id: "7",
        category_type_name: "Apartment",
        category_virtual_tour_url:
          "https://www.newbook.cloud/virtual_tour_link",
        category_max_adults: "5",
        category_max_children: "2",
        category_max_infants: "1",
        category_max_animals: "0",
        category_max_combined: "5",
        sites: [
          {
            site_id: "81",
            site_name: "Luxury Holiday Rental",
            site_description:
              "A stylish holiday apartment ideally situated within the boardwalk entertainment precinct of the Surfers Paradise. Private balcony with amazing views. A walk or bike ride into Surfers Paradise central. Beautiful water ways, foreshore parks and playgrounds, rustic coastline with surf, fishing and swimming beaches.",
            site_short_description:
              "Luxurious Holiday Rental apartment situated within the boardwalk entertainment precinct of Surfers Paradise.",
            site_status: "Clean",
            site_street: "Level 2, 9 Ouyan Street",
            site_city: "Surfers Paradise",
            site_postcode: "4217",
            site_state_id: 4,
            site_state_name: "Queensland",
            site_country_id: 13,
            site_country_name: "Australia",
            site_lat: "153.4177429",
            site_long: "-28.0031270",
            level_id: "",
            level_name: "",
            site_size: {
              id: "1",
              name: "10x10",
              length: "10.00",
              width: "10.00",
              height: "0.00",
              unit: "m",
            },
            parent_id: null,
            child_ids: [],
            custom_fields: [
              {
                id: 1,
                type: "text",
                label: "Suitable for Families",
                value: "No this is accommodation designed for couples-only",
              },
            ],
            site_images: [],
            site_features_specified: false,
            site_features: [],
            map_markers: [],
            notes: [],
          },
        ],
        features: [
          {
            feature_id: "1",
            feature_name: "Air conditioned",
            feature_count: "1",
          },
          {
            feature_id: "2",
            feature_name: "Balcony",
            feature_count: "2",
          },
        ],
        bedding: [
          {
            bedding_type_id: "2",
            bedding_type_name: "Queen",
            bedding_count: "1",
          },
          {
            bedding_type_id: "4",
            bedding_type_name: "Bunks double & single set",
            bedding_count: "1",
          },
        ],
        images: [
          {
            image_type_id: "23",
            image_type_name: "Bedroom",
            image_url:
              "https://driveau.newbook.cloud/instances_3b951b501ee06d886428eef064d803d2_588050ccc3a87.jpeg",
          },
          {
            image_type_id: "24",
            image_type_name: "Bathroom",
            image_url:
              "https://driveau.newbook.cloud/instances_3b951b501ee06d886428eef064d803d2_58804da109eb9.jpeg",
          },
        ],
      },
    ],
    message: "",
  },
  {
    success: "true",
    data: [
      {
        category_id: 7,
        category_name: "One Bedroom Resort Home",
        category_description:
          "A stylish holiday apartment ideally situated within the boardwalk entertainment precinct of the Surfers Paradise. Private balcony with amazing views. A walk or bike ride into Surfers Paradise central. Beautiful water ways, foreshore parks and playgrounds, rustic coastline with surf, fishing and swimming beaches.",
        category_short_description:
          "Luxurious Holiday Rental apartment situated within the boardwalk entertainment precinct of Surfers Paradise.",
        category_type_id: "7",
        category_type_name: "Apartment",
        category_virtual_tour_url:
          "https://www.newbook.cloud/virtual_tour_link",
        category_max_adults: "5",
        category_max_children: "4",
        category_max_infants: "0",
        category_max_animals: "0",
        category_max_combined: "5",
        sites: [
          {
            site_id: "81",
            site_name: "Luxury Holiday Rental",
            site_description:
              "A stylish holiday apartment ideally situated within the boardwalk entertainment precinct of the Surfers Paradise. Private balcony with amazing views. A walk or bike ride into Surfers Paradise central. Beautiful water ways, foreshore parks and playgrounds, rustic coastline with surf, fishing and swimming beaches.",
            site_short_description:
              "Luxurious Holiday Rental apartment situated within the boardwalk entertainment precinct of Surfers Paradise.",
            site_status: "Clean",
            site_street: "Level 2, 9 Ouyan Street",
            site_city: "Surfers Paradise",
            site_postcode: "4217",
            site_state_id: 4,
            site_state_name: "Queensland",
            site_country_id: 13,
            site_country_name: "Australia",
            site_lat: "153.4177429",
            site_long: "-28.0031270",
            level_id: "",
            level_name: "",
            site_size: {
              id: "1",
              name: "10x10",
              length: "10.00",
              width: "10.00",
              height: "0.00",
              unit: "m",
            },
            parent_id: null,
            child_ids: [],
            custom_fields: [
              {
                id: 1,
                type: "text",
                label: "Suitable for Families",
                value: "No this is accommodation designed for couples-only",
              },
            ],
            site_images: [],
            site_features_specified: false,
            site_features: [],
            map_markers: [],
            notes: [],
          },
        ],
        features: [
          {
            feature_id: "1",
            feature_name: "Air conditioned",
            feature_count: "1",
          },
          {
            feature_id: "2",
            feature_name: "Balcony",
            feature_count: "2",
          },
        ],
        bedding: [
          {
            bedding_type_id: "2",
            bedding_type_name: "Queen",
            bedding_count: "1",
          },
          {
            bedding_type_id: "4",
            bedding_type_name: "Bunks double & single set",
            bedding_count: "1",
          },
        ],
        images: [
          {
            image_type_id: "23",
            image_type_name: "Bedroom",
            image_url:
              "https://driveau.newbook.cloud/instances_3b951b501ee06d886428eef064d803d2_588050ccc3a87.jpeg",
          },
          {
            image_type_id: "24",
            image_type_name: "Bathroom",
            image_url:
              "https://driveau.newbook.cloud/instances_3b951b501ee06d886428eef064d803d2_58804da109eb9.jpeg",
          },
        ],
      },
    ],
    message: "",
  },
];
