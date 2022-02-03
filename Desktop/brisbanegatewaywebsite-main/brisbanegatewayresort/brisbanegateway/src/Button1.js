import React from 'react';
import { Link } from 'react-router-dom';

function Button1(props) {
    return (
        <>
            <Link to={props.url} className="common_btn">
                <button >
                    {props.buttonText}
                </button>
            </Link>
        </>
    )
}

export default Button1;