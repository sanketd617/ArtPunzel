const defaultState = {
    isOpen: false
};

export default function (state = defaultState, action) {

    switch (action.type) {
        case "TOGGLE_NAV":
            state = {
                ...state,
                isOpen: !state.isOpen
            };
            break;

        default:
            state = {
                ...state
            };
    }

    return state;
}
