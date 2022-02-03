import React, { useState } from 'react';
import Banner from '../Banner';
import ContactForm from './ContactForm';

function Contact(props) {
    return (
        <div>
            <Banner title='Contact Us'/>
            <ContactForm />
            <h3>Phone</h3>
            <a href='callto:+61733416333'>+61 7 3341 6333</a>
            <h3>Address</h3>
            <a href="https://goo.gl/maps/z4RZFkfUHxYzynKXA">200 School Rd, Rochedale Queensland</a>
        </div>
    )
}

export default Contact;