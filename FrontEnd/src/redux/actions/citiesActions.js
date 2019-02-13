import {actionType} from "../reducers/citiesReducer";
import uuid from 'uuid';


export const addCity = (CITY) => {
    return {
        type: actionType.addCity,
        data: {CITY,
            id: uuid()
        }
    }
};

export const deleteCity = (id) => {
    return {
        type: actionType.deleteCity,
        data: {id}
    }
};

