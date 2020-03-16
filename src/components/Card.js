import React from 'react';
import { Fragment } from "react"


//These arguments come from robots.js for dynamic content//
const Card = ({name, email, id}) => {
    return (
        //Note that we must use className and not class. The class names come from tachyon for quick css//
        //The below example is using JSX. Note that you can only return a single item, such as a single div, or by importing Fragment, we can use a single Fragment tag and use semantic HTML!//
        <Fragment>
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robot' src={`https://robohash.org/${id}?200*200`}/>

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </Fragment>
    );
}

export default Card;