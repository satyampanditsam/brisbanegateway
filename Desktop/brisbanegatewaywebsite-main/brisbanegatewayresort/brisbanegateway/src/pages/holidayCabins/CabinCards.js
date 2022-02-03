import React, { useEffect, useState } from 'react';
import CabinCard from './CabinCard';
import { HolidayCabinDetails } from './HolidayCabinDetails';

const CabinCards = (props) => {

    return (
        <div>
            { HolidayCabinDetails.map((holidayCabin, index) => {
                return (
                    <div>
                        <CabinCard holidayCabin={ holidayCabin } />
                    </div>
                )
            }) }
        </div>
    )
}


export default CabinCards;