import React from 'react';

function Button2(props) {
    return (
        <a href={props.url} className='common_btn'>
            <button >
                {props.buttonText}
            </button>
        </a>
    )
}

export default Button2;