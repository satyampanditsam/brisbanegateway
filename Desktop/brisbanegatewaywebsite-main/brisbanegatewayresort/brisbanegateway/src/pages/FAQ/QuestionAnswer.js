import React, { useEffect, useState } from 'react';

function QuestionAnswer(props) {
    return (
        <div>
            <p>{props.question}</p>
            <p>{props.answer}</p>
        </div>
    );
}

export default QuestionAnswer;