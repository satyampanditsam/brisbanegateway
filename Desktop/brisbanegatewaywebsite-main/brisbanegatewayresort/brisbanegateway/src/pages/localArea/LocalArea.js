import React from "react";
import Banner from "../Banner";
import MainDescription from "../MainDescription";

function LocalArea(props) {
  return (
    <div>
      <div>
        <Banner title="Local Area" />
        <MainDescription
          header="Explore the best of Brisbane"
          description="Exploring locally, you will find the Daisy Hill Koala Centre, one of our free local attractions. Here you can learn about koalas and other native wildlife in their natural habitat, enjoy a picnic or barbeque, take a mountain bike trail or do some brilliant bushwalks. Whether it is local nature, recreation, sporting, shopping, dining or other activities you are looking for we are happy to assist with ideas for things to do."
        />
      </div>

      <div>
        <div>
          <img src="http://localhost:9000/local-area-images/schools-childcare-centres.jpg" />
          <h3>Schools and Childcare Centres</h3>
          <p>
            There is a great range of independent and government schools and
            childcare centres, catering to the educational needs of kids of all
            ages, all within 5 minutes drive of the resort.
          </p>
        </div>
        <div>
          <img src="http://localhost:9000/local-area-images/public-transport.jpg" />
          <h3>Public Transport</h3>
          <p>
            Public buses stop outside the resort and travel to the Brisbane city
            centre along the South East Busway. The Rochedale Bus Station is
            planned adjacent to the resort, high frequency day and night
            services to and from the city will soon be available.
          </p>
        </div>
        <div>
          <img src="http://localhost:9000/local-area-images/rochedale-village.jpg" />
          <h3>Shopping Centres</h3>
          <p>
            Community and regional shopping centres are located nearby. The
            newly developed Rochedale Village Town Centre is 5 minutes away and
            will cater for all your daily needs. The Westfield Garden City
            Shopping Centre is one of Brisbane’s largest shopping malls and only
            10 minutes away by bus or car.
          </p>
        </div>
        <div>
          <img src="http://localhost:9000/local-area-images/daisy-hill-conservation-park.jpg" />
          <h3>Parks and Recreation</h3>
          <p>
            Enjoy local parks and recreational facilites such as Underwood Park
            and the Daisy Hill State Conservation Park, or venture further
            afield to places like the Southbank Parklands, City Botanic Gardens,
            Roma Street Parklands and Brisbane Botanic Gardens at Mount
            Coot-tha.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LocalArea;
