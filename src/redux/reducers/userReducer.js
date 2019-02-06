import user from '../../components/data/user';

const defaultState = user;

const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                 ...state, action.data
            ];
        default:
            return state;
    }
};

export default userReducer;