import {actionType} from "../reducers/ideaReducer";

export const addIdea = (IDEA) => {
    return {
        type: actionType.addIdea,
        data: IDEA
    }
};


