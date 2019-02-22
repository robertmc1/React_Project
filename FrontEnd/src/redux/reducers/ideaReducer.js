
export const actionType = {
    addIdea: '@IDEA -> ADD'

};

const ideaReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.addIdea:
            state = action.data;
            return [...state];
        default:
            return state;
    }
};

export default ideaReducer;