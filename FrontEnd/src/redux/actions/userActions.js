import uuid from 'uuid';
import {actionTypes} from "../reducers/userReducer";


export const addUser = (USER) => {
    return {
        id: uuid(),
        type: actionTypes.addUser,
        data: USER
    }
};

