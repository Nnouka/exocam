export const RECEIVE_PRIVILEGES = 'RECEIVE_PRIVILEGES';

export function receivePrivileges(privileges) {
    return {
        type: RECEIVE_PRIVILEGES,
        privileges
    }
}
