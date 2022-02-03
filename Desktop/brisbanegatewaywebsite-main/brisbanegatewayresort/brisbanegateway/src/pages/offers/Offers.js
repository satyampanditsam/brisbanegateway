import React, { useState } from 'react';
import OfferCards from './OfferCards';
import Banner from '../Banner';

function Offers(props) {
    return (
        <div>
            <Banner title='Offers'/>
            <OfferCards />
        </div>
    );
}

export default Offers;