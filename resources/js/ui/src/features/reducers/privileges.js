import {RECEIVE_PRIVILEGES} from "../actions/privileges";

export default function privileges(state = [], action) {
    switch (action.type) {
        case RECEIVE_PRIVILEGES:
            return action.privileges;
        default :
            return state;
    }
}
