import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';


const store = () => {
    const tempStore = createStore(
        combineReducers({
            user: userReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return tempStore;
};

export default store;