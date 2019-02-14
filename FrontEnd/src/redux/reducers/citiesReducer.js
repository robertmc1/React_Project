import cities from '../../components/data/cities.json';

const defaultState = cities;

export const actionType = {
    addCity : '@CITY -> ADD',
    deleteCity : '@CITY -> DELETE'
};

const cityReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.addCity:
            return [...state, action.data];
        case actionType.deleteCity:
            return state.filter( item =>
               item.id !== action.data.id
            );
        default:
            return state;
    }
};

export default cityReducer;