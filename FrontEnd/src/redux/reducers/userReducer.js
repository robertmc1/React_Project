import user from '../../components/data/user';

const defaultState = user;

export const actionTypes = {
    addUser: '@USER -> ADD',
};

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.addUser:
            return [...state, action.data];
        default:
            return state;
    }
};

export default userReducer;