import React, { useState } from 'react';

function ContactForm(props) {

    const [state, setState] = useState({
        firstName: '',
        surname: '',
        message: '',
    });

    function handleChange(event) {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:9000/contact-form', { method: 'POST', body: JSON.stringify(state), headers: { 'Content-Type': 'application/json' }});
    }


    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label for='firstName'>First Name</label><br />
                <input type='text' id='firstName' name='firstName' value={ state.firstName } onChange={ handleChange }/><br />
                <label for='surname'>Surname</label><br />
                <input type='text' id='surname' name='surname' value={ state.surname } onChange={ handleChange }/><br />
                <label for='message'>Message</label><br />
                <textarea id='message' name='message' rows='6' cols='20' value={ state.message } onChange={ handleChange }/><br />
                <input type='submit' value='Submit'/>
            </form>
        </div>
    );
}

export default ContactForm;