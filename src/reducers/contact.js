import { CONTACT_FORM_REQUEST } from "../actions/contact";

const initialState = {
    isError: false,
    isResponse: false,
    prevIsResponse: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CONTACT_FORM_REQUEST:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
