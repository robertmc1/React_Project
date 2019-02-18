import {actionTypes} from "../reducers/userReducer";


export const addUser = (USER) => {
    return {
        type: actionTypes.addUser,
        data: USER
    }
};

