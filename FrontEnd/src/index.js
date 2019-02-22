import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios'

import createStore from './redux/createStore';
import AppRouter from './components/AppRouter';
import * as serviceWorker from './serviceWorker';


const store = createStore();

const token =   "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjcwNTgxOGYyYzI0M2FlYTNjZGEiLCJpYXQiOjE1NTA3NjMzNzYsImV4cCI6MTU1MDg0OTc3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiMWRhZmExOTgtZmI1NC00ODFmLWJlZjItMDhhY2RiOTU3Yjk1In0.BapvQi_A_VK0HMpaP42iuNENp2SSn66fScWEzMx9qtk";

var config = {

    headers: {'Authorization': token}
};

axios.get('http://52.213.25.226:3030/user', config)
    .then(res => {
        store.dispatch({type: '@USER -> ADD',
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));

axios.get('http://52.213.25.226:3030/city', config)
    .then(res => {
        store.dispatch({type: '@CITY -> ADD',
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));

axios.get('http://52.213.25.226:3030/idea', config)
    .then(res => {
        store.dispatch({type: '@IDEA -> ADD',
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));

ReactDOM.render((
        <Provider store={store}>
            <AppRouter />
        </Provider>)
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
