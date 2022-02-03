import React from 'react';
import CabinFeatures from '../CabinFeatures';
import { HolidayCabinDetails } from '../HolidayCabinDetails';
import { HolidayCabinSliderImages } from './HolidayCabinsSliderImages';




const HolidayCabinDetailsTemplate = (props) => {
    let holidayCabinDetails = HolidayCabinSliderImages[props.index];
    return (
        <div>
            {
            holidayCabinDetails.images.map((image, index) => {
                return (
                    <div>
                        <img src={`http://localhost:9000/${holidayCabinDetails.cabinTitle}/${image}.jpg`} />
                    </div>
                )
            })
            }
            
            <h1>{ props.holidayCabin.cabinTitle }</h1>
            <CabinFeatures guests={ props.holidayCabin.guests } bedrooms={ props.holidayCabin.bedrooms } bathrooms={ props.holidayCabin.bathrooms }/>
            <div>
                <p>
                    {holidayCabinDetails.cabinDescription}
                </p>
            </div>
            <div>
                <div>
                    <h2>Features</h2>
                </div>
                <ul>
                    {
                    holidayCabinDetails.featureList.map((feature, index) => {
                        return (
                            <li key={index}>
                                {feature}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
};

export default HolidayCabinDetailsTemplate;