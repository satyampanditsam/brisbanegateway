import React, { useState } from 'react';
import CabinCards from './CabinCards';
import Banner from '../Banner';
import MainDescription from '../MainDescription';

const HolidayCabins = (props) => {
    return (
        <div>
            <Banner title='Holiday Cabins'/>
            <MainDescription 
                header='Stay in comfort and quality' 
                description='Brisbane Gateway Resort offers an amazing range of fully self-contained, serviced cabin accommodation with modern features and amenities. Cabins are set further back from internal roads and more generously spaced amongst tropically landscaped grounds and gardens to create a relaxed, spacious park environment with convenient proximity to recreational facilities. With over 100 cabins Brisbane Gateway Resort has accommodation category styles perfect for individuals, couples, families and groups. We also frequently accommodate corporate guests, technicians, tradespersons, churches, schools, cultural groups, clubs, sporting athletes and special event groups.'/>
            <CabinCards />
        </div>
    )
}

export default HolidayCabins;