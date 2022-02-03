import React, { useState } from 'react';
import Button2 from '../../Button2';

function CaravanCard(props) {
    return (
        <div>
            <img src={`http://localhost:9000/caravans/${props.caravan.thumbnail}.jpg`} />
            <h3>
                {props.caravan.title}
            </h3>
            <p>
                {props.caravan.description}
            </p>
            <Button2 buttonText='Book Now' url='https://bookingsau.newbook.cloud/brisbane_gateway_resort/?force_category_id=[11,12]' />
        </div>
    );
}

export default CaravanCard;