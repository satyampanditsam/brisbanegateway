import React, { useState } from 'react';

function CabinFeatures(props) {
    return (
        <div>
            <ul>
                <li>{props.guests} guests</li>
                <li>{props.bedrooms} bedroom{props.bedrooms != 1 ? 's': ''}</li>
                <li>{props.bathrooms} bathroom{props.bathrooms != 1 ? 's' : ''}</li>
            </ul>
        </div>
    );
}

export default CabinFeatures;