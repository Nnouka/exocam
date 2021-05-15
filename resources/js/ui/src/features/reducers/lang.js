import {SET_CURRENT_LANG} from '../actions/lang';

export default function lang(state = 'x', action) {
    switch (action.type) {
        case SET_CURRENT_LANG :
            return action.currentLang;
        default :
            return state;
    }
}