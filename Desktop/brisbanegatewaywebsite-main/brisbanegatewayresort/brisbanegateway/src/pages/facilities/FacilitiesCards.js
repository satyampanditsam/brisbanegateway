import React, { useState } from 'react';
import { FacilitiesDetails } from './FacilitiesDetails';
import FacilitiesCard from './FacilitiesCard';

function FacilitiesCards(props) {
    
    

    return (
        <div>
            {FacilitiesDetails.map((facility)=>{
                return (
                    <FacilitiesCard facility={facility}/>
                )
            })}

        </div>
        
    )
}

export default FacilitiesCards;