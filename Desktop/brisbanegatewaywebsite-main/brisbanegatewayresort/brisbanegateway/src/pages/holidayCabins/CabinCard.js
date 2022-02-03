import React, { useEffect, useState } from 'react';
import Button2 from '../../Button2';
import Button1 from '../../Button1';
import CabinFeatures from './CabinFeatures';

const CabinCard = (props) => {
    const [thumbnail, setThumbnail] = useState('');
    useEffect(() => {
        setThumbnail(`http://localhost:9000/holiday-cabin-thumbnails/${props.holidayCabin.thumbnail}.jpg`, []);
    })
    return (
        <div>
            <img src={ thumbnail } />
            <h3>{props.holidayCabin.cabinTitle}</h3>
            <CabinFeatures guests={ props.holidayCabin.guests } bedrooms={ props.holidayCabin.bedrooms } bathrooms={ props.holidayCabin.bathrooms } />
            <Button2 buttonText='Book Now' url='https://bookingsau.newbook.cloud/brisbane_gateway_resort/'/>
            <Button1 buttonText='View Cabin' url={ props.holidayCabin.detailsPage }/>
        </div>
    )
}


export default CabinCard;