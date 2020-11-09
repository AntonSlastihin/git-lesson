import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let dialogData = [
    {id: 1, name: "KARINA"},
    {id: 2, name: "Anton"},
    {id: 3, name: "Maxim"},
    {id: 4, name: "Robert"},
    {id: 5, name: "Sveta"}
];
let messageData = [
    {id: 1, message: "Hey!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Ok."},
    {id: 1, message: "Hey!"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Ok."}
];


ReactDOM.render(<App contents={[dialogData, messageData]}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
