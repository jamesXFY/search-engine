import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import Container from './components/container/Container';


// var element = React.createElement('div', { className: 'greeting' }, 'Hello, world!');
var queryElement = <Container/>

ReactDOM.render(queryElement, document.getElementById('root'));

//ReactDOM.render(resultElement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
