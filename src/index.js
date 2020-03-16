import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
/*Importing the robots object from robots.js allows us to specify dynamic values for the cards, rather than hard-coding each value. We need to wrap the robots object in curly braces as it is Javascript, and there could be multiple exports, rather than the default single export*/
//import { robots } from './robots';

ReactDOM.render(
                <App />
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
