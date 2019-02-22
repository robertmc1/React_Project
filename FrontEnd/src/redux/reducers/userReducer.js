
export const actionTypes = {
    addUser: '@USER -> ADD',
    bulkCreate: '@User => BULK CREATE'
};

const userReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.addUser:
            state = action.data;
            return [...state];
        default:
            return state;
    }
};

export default userReducer;