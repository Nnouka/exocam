import {combineReducers} from 'redux';
import user from './user';
import authState from './authState';
import lang from "./lang";
import activeRoute from "./activeRoute";
import privileges from "./privileges";
import categories from "./categories";
import products from "./products";
export default combineReducers({
   authState,
   user,
   lang,
   activeRoute,
   privileges,
   categories,
   products
});
