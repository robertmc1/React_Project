import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import citiesReducer from './reducers/citiesReducer';


const store = () => {
    const tempStore = createStore(
        combineReducers({
            user: userReducer,
            cities: citiesReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return tempStore;
};

export default store;