import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// index.js is what actually calls ReactDOM.render
// ReactDOM.render takes the react app or what ever the main
// container that you call and this (document.getElementById('root'))
// VVV plain old js that interacts with the DOM. so the html that I have associated
// here must have some element with an id of root (in public/index.html we find a
// div with an id of root )
// By default App becomes our main container component 


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
