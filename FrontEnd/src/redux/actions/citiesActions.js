
import {actionType} from "../reducers/citiesReducer";


export const addCity = (CITY) => {
    return {

        type: actionType.addCity,
        data: CITY

    }
};

export const deleteCity = (id) => {
    return {
        type: actionType.deleteCity,
        data: {id}
    }
};

