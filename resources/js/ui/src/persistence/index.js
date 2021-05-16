import {PersistenceKey} from "./PersistenceKeys";


export const getLocale = () => localStorage.getItem(PersistenceKey.LOCALE) || 'en';
export const setLocale = (locale) => localStorage.setItem(PersistenceKey.LOCALE, locale);
export const setAccessToken = (accessToken) => localStorage.setItem(PersistenceKey.ACCESS_TOKEN, accessToken);
export const getAccessToken = () => localStorage.getItem(PersistenceKey.ACCESS_TOKEN);
export const getAuthState = () => localStorage.getItem(PersistenceKey.AUTHENTICATED) === 'true';
export const clearLocalStorage = () => {
    localStorage.clear();
    localStorage.setItem(PersistenceKey.VISITED, 'true');
}
export const getVisitState = () => localStorage.getItem(PersistenceKey.VISITED) === 'true';
export const setAuthenticationState = (state) => localStorage.setItem(PersistenceKey.AUTHENTICATED, String(state));
export const setRefreshToken = (refreshToken) => localStorage.setItem(PersistenceKey.REFRESH_TOKEN, refreshToken);
export const getRefreshToken = () => localStorage.getItem(PersistenceKey.REFRESH_TOKEN);
export const setTokenExpiresIn = (expiresIn) => {
    const expires = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(PersistenceKey.TOKEN_EXPIRES_AT, String(expires));
}
export const getTokenExpiresAt = () => Number(localStorage.getItem(PersistenceKey.TOKEN_EXPIRES_AT));
export const setUserDetails = (detailStr) => localStorage.setItem(PersistenceKey.USER_DETAILS, detailStr);
export const getUserDetails = () => JSON.parse(localStorage.getItem(PersistenceKey.USER_DETAILS));
export const setRegistrationEmail = (email) => localStorage.setItem(PersistenceKey.REGISTRATION_EMAIL, email);
export const getRegistrationEmail = () => localStorage.getItem(PersistenceKey.REGISTRATION_EMAIL);
export const getServerSessionValue = () => JSON.parse(localStorage.getItem(PersistenceKey.SERVER_SESSION));
export const getLaravelSessionValue = () => localStorage.getItem(PersistenceKey.laravel_session);
export const getXSRFToken = () => localStorage.getItem(PersistenceKey.XSRF_TOKEN);
export const getServerHome = () => {
    const home = localStorage.getItem(PersistenceKey.SERVER_HOME);
    return home;
}
export const logout = (callback) => {
    localStorage.removeItem(PersistenceKey.AUTHENTICATED);
    localStorage.removeItem(PersistenceKey.ACCESS_TOKEN);
    localStorage.removeItem(PersistenceKey.REFRESH_TOKEN);
    localStorage.removeItem(PersistenceKey.TOKEN_EXPIRES_AT);
    callback && callback();
}

