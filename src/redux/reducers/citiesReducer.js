import cities from '../../components/data/cities';

const defaultState = cities;

export const actionType = {
    addCity : '@CITY -> ADD'
};

const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.addCity:
            return [...state, action.data];
        default:
            return state;
    }
};

export default cityReducer;