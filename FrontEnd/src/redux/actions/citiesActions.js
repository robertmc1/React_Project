import {actionType} from "../reducers/citiesReducer";
import uuid from 'uuid';


export const addCity = (CITY) => {
    return {
        id: uuid,
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

