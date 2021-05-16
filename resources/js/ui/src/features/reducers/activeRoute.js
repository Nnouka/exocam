import {POP_ACTIVE_ROUTE, SET_ACTIVE_ROUTE} from "../actions/activeRoute";
import {REFS} from "../../navigation/refs";

export default function activeRoute(state = [{name: REFS.WELCOME}], action) {
    switch (action.type) {
        case SET_ACTIVE_ROUTE :
            if (typeof action.route === "string"){
                if (state.length > 0 && state[state.length - 1].name !== action.route) {
                    return [...state.filter(f => f.name !== action.route), {name: action.route}];
                } else {
                    return state;
                }
            }
            if (typeof action.route === "object") {
                if (state.length > 0 && state[state.length - 1].name !== action.route.name) {
                    return [...state.filter(f => f.name !== action.route.name), action.route];
                } else {
                    return state;
                }
            }
            else return state;
        case POP_ACTIVE_ROUTE :
            if (state.length > 1)
            {
                let prevState = [...state];
                prevState.pop();
                return prevState;
            } else {
                return state;
            }
        default :
            return state;
    }
}
