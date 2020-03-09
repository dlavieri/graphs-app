import { UPLOAD_DATA } from './actions';

const initialState = {
    data: null,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPLOAD_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return {
                ...state
            };
    }
};

export default rootReducer;