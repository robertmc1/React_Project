import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import citiesReducer from './reducers/citiesReducer';
import ideaRedicer from './reducers/ideaReducer';


const store = () => {
    const tempStore = createStore(
        combineReducers({
            user: userReducer,
            cities: citiesReducer,
            idea: ideaRedicer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return tempStore;
};

export default store;