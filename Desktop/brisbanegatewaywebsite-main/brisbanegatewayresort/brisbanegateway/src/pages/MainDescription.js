import React, { useState } from 'react';



function MainDescription(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default MainDescription;