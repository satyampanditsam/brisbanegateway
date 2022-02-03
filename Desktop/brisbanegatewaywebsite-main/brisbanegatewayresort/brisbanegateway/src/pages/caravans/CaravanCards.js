import React, { useState } from 'react';
import { CaravansDetails } from './CaravansDetails';
import CaravanCard from './CaravanCard';

function CaravansCards(props) {
    return (
        <div>
            {CaravansDetails.map((caravan)=>{
                return (
                    <CaravanCard caravan={caravan}/>
                )
            })}
        </div>
    );
}

export default CaravansCards;