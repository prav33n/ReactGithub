// @flow
import { ActionTypes } from './actions';

export const initialState = {
    selectedRepo: null
};

export default (state = initialState, action) => {
    const { type, payload = {} } = action;

    switch (type) {
        case ActionTypes.SETSELECTEDREPO: 
            return {
                ...state,
                selectedRepo: payload,
            };
        
        default:
            return state;
    }
    return state;
};
