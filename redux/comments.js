import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            const uniqueId = comment.length;
            const uniqueIdComment = concat(comment, uniqueId);
            return { ...state, comments: uniqueIdComment };

        default:
            return state;
    }
};