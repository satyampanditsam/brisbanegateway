import React, { useState } from 'react';
import Banner from '../Banner';
import CabinCards from '../holidayCabins/CabinCards';
import MainDescription from '../MainDescription';
import CaravanCards from './CaravanCards';

function Caravans(props) {
    return (
        <div>
            <Banner title='Caravans Sites'/>
            <MainDescription header='Spacious powered sites for your caravan, motorhome, camper van or camper trailer' description='The resort offers spacious, powered camping sites for caravans, fifth wheelers and most types of recreational vehicles such as motorhomes, campervans, rooftop tents and camping trailers. Expect great sites, located close to all amenities with wide roads for easy site access. The sites are spacious, set amongst natural lawns and landscaping, well-drained and central to everything. All sites have concrete annexe pads, access to free wi-fi coverage, twin 15amp electricity outlets, drinking water, waste-water drainage and sewer dump points are available. Amenities include toilets and showers, guest laundry, disability bathroom, parents change room, kitchen with outdoor sheltered picnic seating and bbq areas.'/>
            <CaravanCards />
        </div>
    )
}

export default Caravans;