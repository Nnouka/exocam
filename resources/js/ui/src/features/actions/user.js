
export const RECEIVE_AUTHED_USER = 'RECEIVE_AUTHED_USER';

export function receiveAuthedUser(user) {
    return {
        type: RECEIVE_AUTHED_USER,
        user
    }
}