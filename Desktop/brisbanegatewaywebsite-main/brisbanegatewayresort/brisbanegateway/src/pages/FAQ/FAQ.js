import React, { useEffect, useState } from 'react';
import QuestionAnswer from './QuestionAnswer';
import { QuestionAnswerInfo } from './QuestionAnswerInfo';
import Banner from '../Banner';
import MainDescription from '../MainDescription';
import Button1 from '../../Button1';

function FAQ(props) {

    return (
        <div>
            <div>
                <Banner title='Frequently Asked Questions'/>
            </div>
            {
                QuestionAnswerInfo.map((qa) => {
                    return (
                        <QuestionAnswer question={qa.question} answer={qa.answer} />
                    )
                })
            }
            <h2>Still need help?</h2>
            <Button1 buttonText='Contact Us' url='faq' />
            
        </div>
    );
}

export default FAQ;