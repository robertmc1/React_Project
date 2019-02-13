import uuid from 'uuid';
import {actionTypes} from "../reducers/userReducer";


export const addUser = (USER) => {
    return {
<<<<<<< HEAD:FrontEnd/src/redux/actions/userActions.js
        type: 'ADD_USER',

=======
        id: uuid(),
        type: actionTypes.addUser,
>>>>>>> feature/newActions:src/redux/actions/userActions.js
        data: USER
    }
};

