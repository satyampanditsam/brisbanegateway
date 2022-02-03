import React, { useState } from 'react';

function FacilitiesCard(props) {
    return (
        <div>
            <img src={ `http://localhost:9000/facilities/${props.facility.thumbnail}.jpg` } />
            <h3>
                { props.facility.title }
            </h3>
            <p>
                { props.facility.description }
            </p>
        </div>
    );
}

export default FacilitiesCard;