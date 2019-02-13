import cities from '../../components/data/cities';

const defaultState = cities;

const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return [...state, action.data];
        default:
            return state;
    }
};

export default cityReducer;