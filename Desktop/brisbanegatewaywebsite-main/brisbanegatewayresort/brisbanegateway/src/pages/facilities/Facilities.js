import React, { useState } from 'react';
import Banner from '../Banner';
import MainDescription from '../MainDescription';
import FacilitiesCards from './FacilitiesCards';

function Facilities(props) {
    return (
        <div>
            <Banner title='Facilities' />
            <MainDescription header='Resort facilities' description={'Enjoy a swim in the resort’s sparkling blue swimming pool or a game of tennis on the full-size day/night tennis court. Kids will also have fun exploring the adventure playground featuring four slides and mini climbing walls. Other facilities at Brisbane Gateway Resort include free wi-fi for holiday guests, a guest lounge & TV room, table tennis, free gas BBQs, undercover eating areas, camper’s kitchen and modern laundry.'}/>
            <FacilitiesCards />
        </div>
    )
}

export default Facilities;