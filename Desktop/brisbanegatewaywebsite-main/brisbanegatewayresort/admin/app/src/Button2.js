import React from 'react';

function Button2(props) {
    return (
        <a href={props.url}>
            <button >
                {props.buttonText}
            </button>
        </a>
    )
}

export default Button2;